import './BlogDetail.css'
import { BASE_API_URL } from '../../../config'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../UI/Loader/Loader'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

function BlogDetail() {
	const { slug } = useParams()
	const [news, setNews] = useState(null)
	const { i18n } = useTranslation()

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}blog/${slug}`)
			.then(response => setNews(response.data))
			.catch(error => console.error('Ошибка: ', error))
	}, [slug, i18n.language])

	const getTranslatedNews = newsItem => {
		const language = i18n.language
		switch (language) {
			case 'ru':
				return {
					title: newsItem.title,
					description: newsItem.description,
					sections: newsItem.sections.map(section => ({
						...section,
						title: section.title,
						paragraph: section.paragraph.map(para => ({
							...para,
							text: para.text,
						})),
					})),
				}
			case 'en':
				return {
					title: newsItem.title_en,
					description: newsItem.description_en,
					sections: newsItem.sections.map(section => ({
						...section,
						title: section.title_en,
						paragraph: section.paragraph.map(para => ({
							...para,
							text: para.text_en,
						})),
					})),
				}
			case 'uk':
				return {
					title: newsItem.title_uk,
					description: newsItem.description_uk,
					sections: newsItem.sections.map(section => ({
						...section,
						title: section.title_uk,
						paragraph: section.paragraph.map(para => ({
							...para,
							text: para.text_uk,
						})),
					})),
				}
			default:
				return {
					title: newsItem.title,
					description: newsItem.description,
					sections: newsItem.sections.map(section => ({
						...section,
						title: section.title,
						paragraph: section.paragraph.map(para => ({
							...para,
							text: para.text,
						})),
					})),
				}
		}
	}

	if (!news) return <Loader />

	const translatedNews = getTranslatedNews(news)

	return (
		<>
			<section className='blog__detail__section'>
				<div className='blog__detail__top__title'>
					<h1>{translatedNews.title}</h1>
					<p>{translatedNews.description}</p>
				</div>

				<div className='blog__detail__section__content'>
					{translatedNews.sections.map(section => (
						<div
							className='blog__detail__section__content__item'
							key={section.id}
						>
							<h2 className='blog__detail__section__content__item__title'>
								{section.title}
							</h2>
							<div className='blog__detail__section__content__item__content'>
								{section.paragraph.map(para => (
									<p key={para.id}>{para.text}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default BlogDetail
