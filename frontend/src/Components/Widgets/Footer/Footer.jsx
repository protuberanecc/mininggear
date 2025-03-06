import './Footer.css'
import LogoHeader from '../../UI/Header_UI/LogoHeader/LogoHeader.jsx'
import LinksList from '../../UI/Footer_UI/LinksList/LinksList.jsx'
import CoinMinersList from '../../UI/Footer_UI/CoinMinersList/CoinMinersList.jsx'
import SiteMap from '../../UI/Footer_UI/SiteMap/SiteMap.jsx'
import Contscts from '../../UI/Footer_UI/Contacts/Contscts.jsx'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../../../config.js'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import '../../../i18n.js'

function Footer() {
	const [contact, setContact] = useState(null)
	const { t } = useTranslation()

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}contact/`)
			.then(response => {
				setContact(response.data[0])
			})
			.catch(error => console.log(error))
	}, [])

	if (!contact) {
		return <div>Загрузка...</div>
	}

	return (
		<section className='footer__section'>
			<LogoHeader light={true} />

			<div className='footer__link__container'>
				<Contscts
					address={contact.address}
					phone={contact.phone}
					mail={contact.mail}
				/>
				<SiteMap />
				<CoinMinersList />
				<LinksList
					instagram={contact.instagram}
					facebook={contact.facebook}
					telegram={contact.telegram}
					olx={contact.olx}
				/>
			</div>

			<div className='footer__stroke'>
				<div className='footer__stroke__left'>
					<p>© 2023-2025 MiningGear</p>
				</div>

				<div className='footer__stroke__right'>
					<Link to='confidentiality/'>{t('pol_conf')}</Link>
					<a href={contact.price_list}>{t('price_list')}</a>
					<Link to='rules/'>{t('rules')}</Link>
				</div>
			</div>
		</section>
	)
}

export default Footer
