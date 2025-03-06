import './FormInput.css'
import Dot from '../Dot/Dot.jsx'

function FormInput(props) {
	return (
		<>
			<div className='input__container'>
				<label htmlFor={props.name}>
					{props.important && <Dot />}
					{props.label}
				</label>
				<input
					type='text'
					name={props.name}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
				/>
				{props.error && <div className='error__form'>{props.error}</div>}
			</div>
		</>
	)
}

export default FormInput
