import './LinksListItem.css'
import { Link } from 'react-router-dom'

function LinksListItem(props) {
	return (
		<li className='links__list__item'>
			{props.without_img ? <></> : <img src={props.icon} alt='' />}
			<Link to={props.link}>{props.text}</Link>
		</li>
	)
}

export default LinksListItem
