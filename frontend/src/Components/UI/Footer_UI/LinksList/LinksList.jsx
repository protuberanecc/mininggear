import './LinksList.css'
import LinksListItem from '../LinksListItem/LinksListItem.jsx'
import instagram_icon from '../../../../assets/images/icons/instagram.svg'
import facebook_icon from '../../../../assets/images/icons/facebook.svg'
import telegram_icon from '../../../../assets/images/icons/telegram.svg'
import olx_icon from '../../../../assets/images/icons/olx.svg'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'

function LinksList(props) {
	const { t } = useTranslation()
	return (
		<ul>
			<li className='footer__title__links__list'>{t('social')}</li>
			<LinksListItem
				link={props.instagram}
				icon={instagram_icon}
				text='Instagram'
			/>
			<LinksListItem
				link={props.facebook}
				icon={facebook_icon}
				text='Facebook'
			/>
			<LinksListItem
				link={props.telegram}
				icon={telegram_icon}
				text='Telegram'
			/>
			<LinksListItem link={props.olx} icon={olx_icon} text='OLX' />
		</ul>
	)
}

export default LinksList
