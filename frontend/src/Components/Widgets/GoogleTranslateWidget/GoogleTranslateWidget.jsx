import React, { useState } from 'react'
import axios from 'axios'

function GoogleTranslateWidget() {
	const [sourceText, setSourceText] = useState('')
	const [translatedText, setTranslatedText] = useState('')
	const [loading, setLoading] = useState(false)

	const handleTranslate = async () => {
		setLoading(true)
		try {
			const response = await axios.post(
				'https://libretranslate.com/translate',
				{
					q: sourceText,
					source: 'ru', // исходный язык (русский)
					target: 'en', // целевой язык (английский), можно менять или сделать выбор
					format: 'text',
				}
			)
			setTranslatedText(response.data.translatedText)
		} catch (error) {
			console.error('Ошибка перевода:', error)
			setTranslatedText('Ошибка перевода')
		}
		setLoading(false)
	}

	return (
		<div>
			<h2>LibreTranslate API</h2>
			<textarea
				rows='5'
				cols='50'
				value={sourceText}
				onChange={e => setSourceText(e.target.value)}
				placeholder='Введите текст на русском...'
			/>
			<br />
			<button onClick={handleTranslate} disabled={loading}>
				{loading ? 'Перевод...' : 'Перевести'}
			</button>
			<div>
				<h3>Перевод:</h3>
				<p>{translatedText}</p>
			</div>
		</div>
	)
}

export default GoogleTranslateWidget
