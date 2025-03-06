// LibreTranslateBackend.js
import axios from 'axios'

class LibreTranslateBackend {
	constructor(services, options = {}) {
		this.services = services
		this.options = options
	}

	read(language, namespace, callback) {
		// Если опция defaultBundle не передана, используем пустой объект
		const defaultBundle = this.options.defaultBundle || {}

		// Если целевой язык — русский, возвращаем исходный словарь
		if (language === 'ru') {
			callback(null, defaultBundle)
			return
		}

		// Если словарь пустой, возвращаем пустой перевод
		if (Object.keys(defaultBundle).length === 0) {
			callback(null, {})
			return
		}

		console.log(`Запрашиваем перевод на ${language}...`)
		const keys = Object.keys(defaultBundle)
		const translationPromises = keys.map(key => {
			const text = defaultBundle[key]
			return axios
				.post(
					'https://libretranslate.de/translate',
					{
						q: text,
						source: 'ru',
						target: language,
						format: 'text',
					},
					{
						headers: { 'Content-Type': 'application/json' },
					}
				)
				.then(response => {
					return { key, translation: response.data.translatedText }
				})
				.catch(error => {
					console.error(`Ошибка перевода для ключа ${key}:`, error)
					return { key, translation: text }
				})
		})

		Promise.all(translationPromises)
			.then(results => {
				const translations = {}
				results.forEach(({ key, translation }) => {
					translations[key] = translation
				})
				callback(null, translations)
			})
			.catch(error => callback(error, false))
	}
}

LibreTranslateBackend.type = 'backend'
export default LibreTranslateBackend
