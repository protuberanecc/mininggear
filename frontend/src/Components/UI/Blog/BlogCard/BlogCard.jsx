import './BlogCard.css'
import { BASE_URL } from '../../../../config'
import { Link } from 'react-router-dom'

function BlogCard(props) {
	// Функция для обрезки текста
	const truncateText = (text, maxWords) => {
		let words = text.split(' ')
		return words.length > maxWords
			? words.slice(0, maxWords).join(' ') + '...'
			: text
	}

	return (
		<>
			<div className='blog__card__item'>
				<div className='blog__card__item__img'>
					<img src={`${BASE_URL}/${props.img}`} alt={props.title} />
				</div>
				<div className='blog__card__item__title'>
					<h2>
						<Link to={`${props.slug}`}>{props.title}</Link>
					</h2>
				</div>
				<div className='blog__card__item__description'>
					<p>{truncateText(props.description, 20)}</p>
				</div>
			</div>
		</>
	)
}

export default BlogCard
