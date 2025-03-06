import './OrderForm.css'
import Plus from '../../MainPageHeroSection/Plus/Plus'
import { useState } from 'react'
import axios from 'axios'
import SuccessNotification from '../SuccessNotification/SuccessNotification'
import Successfull from '../Successfull/Successfull'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'
import { BOT_TOKEN, TELEGRAM_CHAT_ID } from '../../../../config'

function OrderForm(props) {
	const { t } = useTranslation()
	const { initialData, onQuantityChange, f_close } = props
	// Локальное состояние для обязательных полей
	const [phone, setPhone] = useState('')
	const [telegram, setTelegram] = useState('')
	const [errors, setErrors] = useState({})
	const [success, setSuccess] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		if (name === 'phone') setPhone(value)
		else if (name === 'telegram') setTelegram(value)
	}

	// Валидация обязательных полей
	const validate = () => {
		const newErrors = {}
		if (!phone) newErrors.phone = t('phone_must')
		if (!telegram) newErrors.telegram = t('tg_must')
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!validate()) return

		const message = `
Заказ:
Модель: ${initialData.model}
Телефон: ${phone}
Telegram: ${telegram}
Количество: ${initialData.quantity}
Стоимость: ${initialData.total} $
    `
		// Данные для телеграм-бота (пример)
		const botToken = BOT_TOKEN
		const chatId = TELEGRAM_CHAT_ID
		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: message,
			})
			setSuccess(true)
		} catch (error) {
			console.error('Ошибка при отправке заказа: ', error)
			alert(t('alert_error'))
		}
	}

	// Функции изменения количества
	const handleIncrement = () => {
		const newQuantity = initialData.quantity + 1
		onQuantityChange(newQuantity)
	}
	const handleDecrement = () => {
		const newQuantity = initialData.quantity > 1 ? initialData.quantity - 1 : 1
		onQuantityChange(newQuantity)
	}

	if (success) {
		return (
			<div className='order__form__con'>
				<Successfull onClose={f_close} />
			</div>
		)
	}

	return (
		<div className='order__form__con'>
			<form action='#' onSubmit={handleSubmit}>
				<div className='order__form__form__title'>
					<h1>{t('order')}</h1>
					<Plus onClick={f_close} />
				</div>
				<div className='order__form__con__input__con'>
					<label htmlFor='model'>{t('model')}</label>
					<input
						disabled
						type='text'
						id='model'
						value={initialData.model}
						readOnly
					/>
				</div>
				<div className='order__form__con__input__con'>
					<label htmlFor='phone'>{t('phone')}</label>
					<input
						type='number'
						id='phone'
						name='phone'
						value={phone}
						onChange={handleInputChange}
					/>
					{errors.phone && <p className='error-order-form'>{errors.phone}</p>}
				</div>
				<div className='order__form__con__input__con'>
					<label htmlFor='telegram'>Telegram</label>
					<input
						type='text'
						id='telegram'
						name='telegram'
						value={telegram}
						onChange={handleInputChange}
					/>
					{errors.telegram && (
						<p className='error-order-form'>{errors.telegram}</p>
					)}
				</div>
				<div className='order__form__con__input__con'>
					<label htmlFor='price'>{t('cost')}, $/USDT</label>
					<input type='text' id='price' value={initialData.total} readOnly />
				</div>
				<div className='order__form__con__input__con_q'>
					<label htmlFor='quantity'>{t('quantity')}</label>
					<div className='quantity-control'>
						<button type='button' onClick={handleDecrement}>
							-
						</button>
						<input
							disabled
							type='number'
							id='quantity'
							name='quantity'
							value={initialData.quantity}
							readOnly
						/>
						<button type='button' onClick={handleIncrement}>
							+
						</button>
					</div>
				</div>
				<button className='order__form__btn' type='submit'>
					{t('take_order')}
				</button>
			</form>
		</div>
	)
}

export default OrderForm
