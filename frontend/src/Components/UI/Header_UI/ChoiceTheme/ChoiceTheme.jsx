import './ChoiceTheme.css'
import ThemeBtn from '../ThemeBtn/ThemeBtn.jsx'
import LoginBtn from '../LoginBtn/LoginBtn.jsx'

function ChoiceTheme() {
	return (
		<div className='login__themebtn__container'>
			<LoginBtn text='Войти' />

			<ThemeBtn />
		</div>
	)
}

export default ChoiceTheme
