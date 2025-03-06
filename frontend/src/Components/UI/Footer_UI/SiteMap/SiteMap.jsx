import './SiteMap.css'
import LinksListItem from '../LinksListItem/LinksListItem'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'

function SiteMap() {
	const { t } = useTranslation()
	return (
		<ul>
			<li className='footer__title__links__list'>{t('site_map')}</li>
			<LinksListItem link={'/'} without_img={true} text={t('home')} />
			<LinksListItem link={'catalog/'} without_img={true} text={t('catalog')} />
			<LinksListItem link={'news/'} without_img={true} text={t('blog')} />
			<LinksListItem link={'contact/'} without_img={true} text={t('contact')} />
		</ul>
	)
}

export default SiteMap
