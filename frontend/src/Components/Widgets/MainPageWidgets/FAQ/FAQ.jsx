import './FAQ.css'
import FaqItem from '../../../UI/MainPageHeroSection/FaqItem/FaqItem.jsx'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_API_URL } from '../../../../config.js'
import { useTranslation } from 'react-i18next' // Импортируем useTranslation

function FAQ() {
	const [faqs, setFaqs] = useState([])
	const { i18n } = useTranslation() // Получаем текущий язык

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}faq/`)
			.then(response => {
				setFaqs(response.data)
			})
			.catch(error => {
				console.error('Ошибка: ', error)
			})
	}, [i18n.language]) // Обновляем данные при смене языка

	// Функция для получения переведённого текста
	const getTranslatedText = faq => {
		const language = i18n.language // Текущий язык (ru, en, uk)
		switch (language) {
			case 'ru':
				return { title: faq.title, description: faq.description }
			case 'en':
				return { title: faq.title_en, description: faq.description_en }
			case 'uk':
				return { title: faq.title_uk, description: faq.description_uk }
			default:
				return { title: faq.title, description: faq.description }
		}
	}

	return (
		<>
			<section className='section__faq'>
				<h1>FAQ'S</h1>
				<div className='section__faq__container'>
					{faqs.map((faq, index) => {
						const translated = getTranslatedText(faq) // Получаем перевод
						return (
							<FaqItem
								key={index}
								title={translated.title}
								text={translated.description}
							/>
						)
					})}
				</div>
			</section>
		</>
	)
}

export default FAQ
