import './LoginBtn.css'

function LoginBtn(props) {
	return (
		<a className='login__header__btn' href={props.link}>
			{props.text}
		</a>
	)
}

export default LoginBtn
