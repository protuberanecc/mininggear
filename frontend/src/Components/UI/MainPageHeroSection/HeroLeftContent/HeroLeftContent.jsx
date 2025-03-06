import LoginBtn from '../../../UI/Header_UI/LoginBtn/LoginBtn.jsx'
import Dot from '../Dot/Dot.jsx'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'
import { useState, useEffect } from 'react'
import { BASE_API_URL } from '../../../../config.js'
import axios from 'axios'

function HeroLeftContent() {
	const { t } = useTranslation()
	const [contact, setContact] = useState([])

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}contact/`)
			.then(response => {
				setContact(response.data[0])
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<div className='grid-item1'>
			<h1 className='default__title__size hero__section__h1'>
				{t('new_mining_asic')}
			</h1>
			<ul>
				<li>
					<Dot />
					{t('work_with_contract')}
				</li>
				<li>
					<Dot />
					{t('check_before_delivery')}
				</li>
				<li>
					<Dot />
					{t('gdt')}
				</li>
			</ul>
			<LoginBtn link={contact.price_list} text={t('price_list')} />
		</div>
	)
}

export default HeroLeftContent
