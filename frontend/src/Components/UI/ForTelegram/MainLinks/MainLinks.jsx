import './MainLinks.css'

function MainLinks(props) {
	return (
		<a href='#' className='for__telegram__main__page__item'>
			<h1>{props.title}</h1>
			<img src={props.img} alt={props.title} />
		</a>
	)
}

export default MainLinks
