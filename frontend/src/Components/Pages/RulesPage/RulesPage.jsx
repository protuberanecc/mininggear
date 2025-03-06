import './RulesPage.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

function RulesPage() {
	const { t } = useTranslation()

	// Получаем массив confidentiality из переводов
	const rules_text = t('rules_text', { returnObjects: true })

	return (
		<>
			<section className='confidentiality__section'>
				<h1>{t('rules')}</h1>

				<div className='confidentiality__section__item obsie_polojenia'>
					{rules_text.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</section>
		</>
	)
}

export default RulesPage
