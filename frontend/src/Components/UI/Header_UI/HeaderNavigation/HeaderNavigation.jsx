import './HeaderNavigation.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

function HeaderNavigation() {
	const { t } = useTranslation()
	return (
		<>
			<nav className='navigation_links'>
				<ul>
					<li>
						<Link to='/'>{t('home')}</Link>
					</li>
					<li>
						<Link to='catalog/'>{t('catalog')}</Link>
					</li>
					<li>
						<Link to='news/'>{t('blog')}</Link>
					</li>
					<li>
						<Link to='contact/'>{t('contact')}</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default HeaderNavigation
