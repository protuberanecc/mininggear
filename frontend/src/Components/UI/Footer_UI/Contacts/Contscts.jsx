import './Contscts.css'
import LinksListItem from '../LinksListItem/LinksListItem.jsx'
import map_icon from '../../../../assets/images/icons/map.svg'
import phone_icon from '../../../../assets/images/icons/phone.svg'
import mail_icon from '../../../../assets/images/icons/mail.svg'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'

function Contscts(props) {
	const { t } = useTranslation()
	return (
		<ul>
			<li className='footer__title__links__list'>{t('contact')}</li>
			<LinksListItem icon={map_icon} text={props.address} />
			<LinksListItem icon={phone_icon} text={`+${props.phone}`} />
			<LinksListItem icon={mail_icon} text={props.mail} />
		</ul>
	)
}

export default Contscts
