import React from 'react'
import './SuccessNotification.css'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

function SuccessNotification({ onClose, collor }) {
	const { t } = useTranslation()

	return (
		<div
			className={
				!collor
					? 'success-notification'
					: 'success-notification success-notification__light'
			}
		>
			{!collor ? ( // Используем collor из пропсов
				<>
					<h1>{t('thanks')}</h1>
					<button onClick={onClose}>{t('ok')}</button>
				</>
			) : (
				<>
					<h1 className='success__light'>{t('thanks')}</h1>
					<button className='success__light' onClick={onClose}>
						{t('ok')}
					</button>
				</>
			)}
		</div>
	)
}

export default SuccessNotification
