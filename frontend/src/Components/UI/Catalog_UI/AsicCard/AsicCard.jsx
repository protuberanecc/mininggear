import './AsicCard.css'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../../config'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

function AsicCard(props) {
	const { t } = useTranslation()
	return (
		<div
			className={props.hot ? 'asic__card__con black_hot' : 'asic__card__con'}
		>
			{props.hot && <div className='hot'>Hot</div>}
			<div className='top__text__card'>
				<div className='top__text__card__title'>
					<p className='brand__card__title'>{props.brandName}</p>
					<h1 className='asic__card__title'>{props.title}</h1>
					<div className='power__hash'>
						<p>
							{props.hash} {props.hash_title}/s
						</p>
						<p>|</p>
						<p>{props.power} W</p>
					</div>
					<p className='card__price'>${props.price_usdt}</p>
				</div>
				<a onClick={props.onBuyClick} href='#'>
					{t('buy')}
				</a>
			</div>
			<img src={`${BASE_URL}${props.image}`} alt='' />
			<div className='bottom__view__detail'>
				<Link to={`${props.slug}`}>{t('more')}</Link>
			</div>
		</div>
	)
}

export default AsicCard
