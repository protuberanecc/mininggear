import './LogoHeader.css'
import Logo from '../Logo/Logo.jsx'
import LogoStaticLight from '../LogoStaticLight/LogoStaticLight.jsx'

function LogoHeader(props) {
	return (
		<div className='logo__container'>
			<LogoStaticLight class_d='telegram__layout__header__svg' />
			{props.light ? (
				<h1 className={`logo__title logo__title__light ${props.dop_class}`}>
					MiningGear
				</h1>
			) : (
				<h1 className={`logo__title ${props.dop_class}`}>MiningGear</h1>
			)}
		</div>
	)
}

export default LogoHeader
