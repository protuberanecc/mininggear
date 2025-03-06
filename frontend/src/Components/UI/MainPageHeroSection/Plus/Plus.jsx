import './Plus.css'

function Plus({ onClick }) {
	return (
		<>
			<svg
				onClick={onClick}
				viewBox='0 0 192 191'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M96 9V182' stroke-width='18' stroke-linecap='round' />
				<path
					d='M9.5 95.5L182.5 95.5'
					stroke-width='18'
					stroke-linecap='round'
				/>
			</svg>
		</>
	)
}

export default Plus
