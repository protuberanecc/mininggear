import './Confidentiality.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

function Confidentiality() {
	const { t } = useTranslation()

	// Получаем массив confidentiality из переводов
	const confidentiality = t('confidentiality', { returnObjects: true })
	const dop_confidentiality = t('dop_confidentiality', { returnObjects: true })
	const dop2_confidentiality = t('dop2_confidentiality', {
		returnObjects: true,
	})

	return (
		<>
			<section className='confidentiality__section'>
				<h1>{t('confident_text1')}</h1>
				<div className='confidentiality__section__item'>
					<h2>{t('confident_text2')}</h2>
					{confidentiality.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>

				<div className='confidentiality__section__item obsie_polojenia'>
					<h2>{t('confident_text3')}</h2>
					{dop_confidentiality.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>

				<div className='confidentiality__section__item obsie_polojenia'>
					<h2>{t('confident_text4')}</h2>
					{dop2_confidentiality.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</section>
		</>
	)
}

export default Confidentiality
