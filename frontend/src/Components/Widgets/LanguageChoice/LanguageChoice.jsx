import './LanguageChoice.css'
import '../../../i18n.js'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function LanguageChoice() {
	const { i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false) // Для отслеживания состояния открытости меню
	const [selectedLanguage, setSelectedLanguage] = useState('ru') // Язык по умолчанию

	// Массив доступных языков
	const availableLanguages = ['ru', 'uk', 'en']

	// Функция для смены языка
	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
		setSelectedLanguage(lng) // Устанавливаем выбранный язык
		setIsOpen(false) // Закрываем меню после выбора
	}

	// Функция для переключения состояния выпадающего меню
	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className='language__choice'>
			<button onClick={toggleMenu}>
				{selectedLanguage === 'ru' && 'RU'}
				{selectedLanguage === 'uk' && 'UK'}
				{selectedLanguage === 'en' && 'EN'}
			</button>

			{isOpen && (
				<ul>
					{availableLanguages
						.filter(lang => lang !== selectedLanguage) // Исключаем выбранный язык
						.map(lang => (
							<li key={lang} onClick={() => changeLanguage(lang)}>
								{lang === 'ru' && 'RU'}
								{lang === 'uk' && 'UK'}
								{lang === 'en' && 'EN'}
							</li>
						))}
				</ul>
			)}
		</div>
	)
}

export default LanguageChoice
