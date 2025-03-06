import axios from 'axios'
import './Contact.css'
import { useState, useEffect } from 'react'
import { BASE_API_URL, BASE_URL } from '../../../config'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

function Contact() {
	// Инициализируем contact как объект с managers – пустым массивом
	const [contact, setContact] = useState(null)
	const { t } = useTranslation()

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}contact/`)
			.then(response => {
				if (response.data && response.data.length > 0) {
					setContact(response.data[0]) // Берем первый элемент массива
				}
			})
			.catch(error => console.log('Ошибка: ', error))
	}, [])

	// Проверяем, есть ли данные перед отображением
	if (!contact) {
		return <p>Загрузка...</p>
	}

	return (
		<>
			<section className='contact__section'>
				<h1>{t('contact')}</h1>
				<div className='contact__section__content'>
					<div className='contact__info__item'>
						<h2>{t('social_c')}</h2>
						<ul>
							<li>
								<a href={contact.facebook || '#'}>Facebook:</a>
								<a href={contact.facebook || '#'}>{contact.facebook}</a>
							</li>
							<li>
								<a href={contact.instagram || '#'}>Instagram:</a>
								<a href={contact.instagram || '#'}>{contact.instagram}</a>
							</li>
							<li>
								<a href={contact.telegram || '#'}>Telegram:</a>
								<a href={contact.telegram || '#'}>{contact.telegram}</a>
							</li>
						</ul>
					</div>

					<div className='contact__info__item'>
						<h2>{t('contact_info')}</h2>
						<ul>
							<li>
								<p>{t('mail')}:</p>
								<a href={`mailto:${contact.mail}`}>
									{contact.mail || 'Нет почты'}
								</a>
							</li>
							<li>
								<p>Telegram ({t('managers')}):</p>
								{contact.managers.length > 0 ? (
									contact.managers.map(manager => (
										<a key={manager.id} href={manager.link}>
											{manager.title}
										</a>
									))
								) : (
									<p>Нет менеджеров</p>
								)}
							</li>
							<li>
								<p>{t('phone')}:</p>
								<a href={`tel:+${contact.phone}`}>
									+ {contact.phone || 'Нет номера'}
								</a>
							</li>
						</ul>
					</div>

					<div className='contact__info__item'>
						<h2>{t('scl')}</h2>
						<ul>
							<li>
								<p>{t('address')}:</p>
								<p>{contact.address || 'Адрес не указан'}</p>
							</li>
							<li>
								{contact.img ? (
									<img src={`${BASE_URL}${contact.img}`} alt='Склад' />
								) : (
									<p>Изображение отсутствует</p>
								)}
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
