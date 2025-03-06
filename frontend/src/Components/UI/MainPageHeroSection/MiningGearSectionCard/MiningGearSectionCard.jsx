import './MiningGearSectionCard.css'
import { Link } from 'react-router-dom' // Импортируем Link для навигации

function MiningGearSectionCard(props) {
	return (
		<div
			className={
				props.different ? 'main__page__card different' : 'main__page__card'
			}
		>
			<div className='main__page__card__text'>
				<h2 className=''>{props.title}</h2>
				<p>{props.text}</p>
				<Link to={props.link} className='login__header__btn'>
					{props.link_title}
				</Link>
			</div>

			<img className='main__page__card__image' src={props.image} alt='' />
		</div>
	)
}

export default MiningGearSectionCard
