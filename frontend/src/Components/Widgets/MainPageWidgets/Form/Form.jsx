import './Form.css'
import React, { useState } from 'react'
import axios from 'axios'
import form_photo from '../../../../assets/images/main_page_imgs/2.png'
import FormInput from '../../../UI/MainPageHeroSection/FormInput/FormInput.jsx'
import { BOT_TOKEN, TELEGRAM_CHAT_ID } from '../../../../config.js'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'
import SuccessNotification from '../../../UI/Catalog_UI/SuccessNotification/SuccessNotification.jsx'

function Form() {
	const [formData, setFormData] = useState({
		name: '',
		telegram: '',
		email: '',
		message: '',
	})

	const { t } = useTranslation()

	const [errors, setErrors] = useState({})
	const [success, setSuccess] = useState(false) // Добавляем состояние success

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const validate = () => {
		let tempErrors = {}
		if (!formData.name) tempErrors.name = t('name_error')
		if (!formData.telegram) tempErrors.telegram = t('tg_error')
		setErrors(tempErrors)
		return Object.keys(tempErrors).length === 0
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!validate()) return

		const botToken = BOT_TOKEN // Замените на ваш токен бота
		const chatId = TELEGRAM_CHAT_ID // Замените на ваш chat ID
		const message = `
      Имя: ${formData.name}\n
      Telegram: ${formData.telegram}\n
      Почта: ${formData.email}\n
      Сообщение: ${formData.message}
    `

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: message,
			})
			setSuccess(true) // Устанавливаем success в true при успешной отправке
		} catch (error) {
			alert(t('fatal_error'))
			console.error('Error sending message: ', error)
		}
	}

	// Если success === true, показываем SuccessNotification
	if (success) {
		return (
			<div className='section__form__container'>
				<SuccessNotification collor={true} onClose={() => setSuccess(false)} />
			</div>
		)
	}

	return (
		<section className='section__form__container'>
			<div className='blub_form blub_form1'></div>
			<div className='blub_form blub_form2'></div>
			<img src={form_photo} alt='' />
			<div className='section__form__container__left section__form__container__item'>
				<h2>{t('form_title')}</h2>
				<p>
					{t('q1')} <br /> {t('q2')}
				</p>
			</div>
			<div className='section__form__container__right section__form__container__item'>
				<form onSubmit={handleSubmit}>
					<FormInput
						important={true}
						label={t('u_name')}
						placeholder={t('form_name')}
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						error={errors.name}
					/>
					<FormInput
						important={true}
						label='Telegram'
						placeholder='@example'
						name='telegram'
						value={formData.telegram}
						onChange={handleInputChange}
						error={errors.telegram}
					/>
					<FormInput
						label={t('post_name')}
						placeholder='example@gmail.com'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						error={errors.email}
					/>
					<FormInput
						label={t('message')}
						placeholder={t('message_text')}
						name='message'
						value={formData.message}
						onChange={handleInputChange}
						error={errors.message}
					/>
					<button type='submit'>{t('submit')}</button>
				</form>
			</div>
		</section>
	)
}

export default Form
