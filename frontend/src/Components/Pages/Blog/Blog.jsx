import './Blog.css'
import React, { useEffect, useState } from 'react'
import BlogCard from '../../UI/Blog/BlogCard/BlogCard'
import axios from 'axios'
import { BASE_API_URL } from '../../../config'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

function Blog() {
	const [news, setNews] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 12
	const { t, i18n } = useTranslation() // Добавляем i18n для получения текущего языка

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}blog/`)
			.then(response => {
				setNews(response.data)
			})
			.catch(error => {
				console.error('Ошибка: ', error)
			})
	}, [i18n.language]) // Обновляем данные при смене языка

	// Функция для получения переведённых данных
	const getTranslatedNews = newsItem => {
		const language = i18n.language // Текущий язык (ru, en, uk)
		switch (language) {
			case 'ru':
				return {
					title: newsItem.title,
					description: newsItem.description,
					img: newsItem.img,
				}
			case 'en':
				return {
					title: newsItem.title_en,
					description: newsItem.description_en,
					img: newsItem.img_en,
				}
			case 'uk':
				return {
					title: newsItem.title_uk,
					description: newsItem.description_uk,
					img: newsItem.img_uk,
				}
			default:
				return {
					title: newsItem.title,
					description: newsItem.description,
					img: newsItem.img,
				}
		}
	}

	// Вычисляем общее количество страниц
	const totalPages = Math.ceil(news.length / itemsPerPage)

	// Функция смены страницы
	const handlePageChange = page => {
		setCurrentPage(page)
	}

	// Определяем, какие новости показывать на текущей странице
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentNews = news.slice(indexOfFirstItem, indexOfLastItem)

	return (
		<section className='blog__section'>
			<h1 className='catalog__title'>{t('blog')}</h1>
			<div className='blog__section__content'>
				{currentNews.map(newsItem => {
					const translatedNews = getTranslatedNews(newsItem) // Получаем перевод
					return (
						<BlogCard
							key={newsItem.pk}
							title={translatedNews.title}
							description={translatedNews.description}
							img={translatedNews.img}
							slug={newsItem.slug}
						/>
					)
				})}
			</div>
			{/* Пагинация */}
			<div className='pagination'>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index + 1}
						onClick={() => handlePageChange(index + 1)}
						className={`page-button ${
							currentPage === index + 1 ? 'active' : ''
						}`}
					>
						{index + 1}
					</button>
				))}
			</div>
		</section>
	)
}

export default Blog
