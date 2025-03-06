import './TelegramLayOut.css'
import { Outlet } from 'react-router-dom'
import LogoHeader from '../../UI/Header_UI/LogoHeader/LogoHeader'

function TelegramLayOut() {
	return (
		<section className='telegram__main__layout'>
			<div className='telegram__main__layout__header'>
				<LogoHeader
					dop_class={'telegram__layout__header'}
					dop_class_svg={'telegram__layout__header__svg'}
				/>
			</div>
			<Outlet />
		</section>
	)
}

export default TelegramLayOut
