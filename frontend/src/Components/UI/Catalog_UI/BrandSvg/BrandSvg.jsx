import './BrandSvg.css'

function BrandSvg(props) {
	return (
		<>
			<div className='svg__brand'>
				<h1>{props.text}</h1>
			</div>
		</>
	)
}

export default BrandSvg
