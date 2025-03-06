import './Successfull.css'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

function Successfull({ onClose }) {
	const { t } = useTranslation()
	return (
		<div className='successful-notification'>
			<>
				<h1>{t('thanks')}</h1>
				<button onClick={onClose}>{t('ok')}</button>
			</>
		</div>
	)
}

export default Successfull
