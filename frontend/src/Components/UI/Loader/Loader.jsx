import './Loader.css'
import Logo from '../Header_UI/Logo/Logo'

function Loader() {
	return (
		<>
			<div className='loader__position__container'>
				<div className='loader__content_container'>
					<div className='loader__svg'>
						<Logo id='loader__color' />
					</div>
					<div className='loader__text'>
						<p>Загрузка</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Loader
