import './FixedMenu.css'
import Plus from '../../MainPageHeroSection/Plus/Plus.jsx'
import { Link } from 'react-router-dom'
import LanguageChoice from '../../../Widgets/LanguageChoice/LanguageChoice.jsx'

function FixedMenu(props) {
	return (
		<>
			<div className='fixed__menu__container'>
				<div className='fixed__menu__top__ch'>
					<div className='lchoice__container'>
						<LanguageChoice />
					</div>
					<div onClick={props.onclick} className='close__btn'>
						<Plus />
					</div>
				</div>

				<div className='fixed__menu__con'>
					<ul>
						<li onClick={props.onclick}>
							<Link to='/'>Главная</Link>
						</li>
						<li onClick={props.onclick}>
							<Link to='catalog/'>Каталог</Link>
						</li>
						<li onClick={props.onclick}>
							<Link to='news/'>Блог</Link>
						</li>
						<li onClick={props.onclick}>
							<Link to='contact/'>Контакты</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default FixedMenu
