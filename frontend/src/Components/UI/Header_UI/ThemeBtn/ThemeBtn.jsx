import React, { useState } from 'react'
import Sun from '../Sun/Sun.jsx'
import './ThemeBtn.css'

function ThemeBtn() {
	// Состояние для хранения темы (по умолчанию — день)
	const [isDark, setIsDark] = useState(false)

	// Функция для переключения темы
	const toggleTheme = () => {
		setIsDark(!isDark) // Меняем тему на противоположную
		const root = document.documentElement // Получаем корневой элемент

		if (!isDark) {
			root.style.setProperty('--black-color', '#e1e1e1')
			root.style.setProperty('--light-color', '#141414')
			root.style.setProperty(
				'--light-gradient',
				'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.005) 100%)'
			)
			root.style.setProperty('--light-color-rgba', 'rgba(0, 0, 0, 0.1)')
		} else {
			root.style.setProperty('--black-color', '#141414')
			root.style.setProperty('--light-color', '#e1e1e1')
			root.style.setProperty(
				'--light-gradient',
				'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.005) 100%)'
			)
			root.style.setProperty('--light-color-rgba', 'rgba(255, 255, 255, 0.1)')
		}
	}

	return (
		<div
			className={`theme__btn ${isDark ? 'btn-dark' : 'btn-light'}`}
			onClick={toggleTheme}
		>
			<Sun />
		</div>
	)
}

export default ThemeBtn
