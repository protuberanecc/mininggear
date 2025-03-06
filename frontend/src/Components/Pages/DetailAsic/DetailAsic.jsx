import './DetailAsic.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, BASE_API_URL } from '../../../config'
import useCoinPrice from '../../UI/DetailAsic/useCoinPrice/useCoinPrice'
import Loader from '../../UI/Loader/Loader'
import OrderForm from '../../UI/Catalog_UI/OrderForm/OrderForm'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

function DetailAsic() {
	const { t } = useTranslation()
	const { slug } = useParams()
	const [asic, setAsic] = useState(null)
	const [coins, setCoins] = useState({})
	const [openOrder, setOpenOrder] = useState(false)
	const [orderData, setOrderData] = useState(null)

	useEffect(() => {
		axios
			.get(`${BASE_API_URL}asics/${slug}`)
			.then(response => setAsic(response.data))
			.catch(console.error)

		axios.get(`${BASE_API_URL}coins/`).then(response => {
			const coinMapping = response.data.reduce((acc, coin) => {
				acc[coin.pk] = coin // сохраняем полный объект монеты (с title, slug и т.д.)
				return acc
			}, {})
			setCoins(coinMapping)
		})
	}, [slug])

	// Определяем coinApiTitle – если данных ещё нет, по умолчанию берём 'bitcoin'
	const coinApiTitle =
		asic && coins[asic.coin] && coins[asic.coin].api_title
			? coins[asic.coin].api_title.toLowerCase()
			: 'bitcoin'

	// Получаем актуальную цену для монеты по её api_title (через универсальный хук)
	const coinPrice = useCoinPrice(coinApiTitle)

	// Если данных ещё нет, показываем Loader
	if (!asic || Object.keys(coins).length === 0 || coinPrice === null)
		return <Loader />

	// Множитель для корректировки доходности, получаем из данных асика
	const multiplier = asic.multiplier || 1

	// Рассчитываем доходность, умножив цену на multiplier
	const dailyUSD = coinPrice * multiplier
	const monthlyUSD = dailyUSD * 30
	const yearlyUSD = dailyUSD * 365

	// Обработка клика "Купить"
	const handleBuyClick = () => {
		setOrderData({
			model: asic.title,
			unitPrice: asic.price_usdt,
			quantity: 1,
			total: asic.price_usdt,
		})
		setOpenOrder(true)
	}

	const handleCloseOrder = () => {
		setOpenOrder(false)
		setOrderData(null)
	}

	// Функция для обновления количества – принимает новое значение (число)
	const handleQuantityChange = newQuantity => {
		setOrderData(prev => ({
			...prev,
			quantity: newQuantity,
			total: newQuantity * prev.unitPrice,
		}))
	}

	const handleSubmitOrder = e => {
		e.preventDefault()
		console.log('Заказ из детали:', orderData)
		// Логика отправки заказа через Telegram обрабатывается внутри OrderForm
	}

	// Объект монеты для отображения названия
	const coinObj = coins[asic.coin]

	return (
		<>
			{openOrder && orderData && (
				<div className='order__catalog__form'>
					<OrderForm
						initialData={orderData}
						onQuantityChange={handleQuantityChange}
						onSubmit={handleSubmitOrder}
						f_close={handleCloseOrder}
					/>
				</div>
			)}
			<div className='asic__detail__card'>
				<h1 className='asic__detail__name'>{asic.title}</h1>
				<div className='asic__detail__card__grid'>
					<div className='asic__detail__card__left'>
						<img src={`${BASE_URL}${asic.image}`} alt={asic.title} />
					</div>
					<div className='asic__detail__card__right'>
						<h2>{t('model_properties')}</h2>
						<div className='main__property__container'>
							<div className='prop__con'>
								<div className='main_props'>{t('main_p')}</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('hash')}
									</p>
									<p>
										{asic.hash} {asic.hash_title}/s
									</p>
								</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('power')}
									</p>
									<p>{asic.power} W</p>
								</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('algo')}
									</p>
									<p>{asic.algo}</p>
								</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('coin')}
									</p>
									<p>{coinObj ? coinObj.title : t('unknown')}</p>
								</div>
							</div>
							<div className='profit__con'>
								<div className='main_props'>{t('profit')}</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('in_year')}
									</p>
									<p>{yearlyUSD.toFixed(2)} $</p>
								</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('in_month')}
									</p>
									<p>{monthlyUSD.toFixed(2)} $</p>
								</div>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('in_day')}
									</p>
									<p>{dailyUSD.toFixed(2)} $</p>
								</div>
							</div>
							<div className='prc__con'>
								<div className='property__item'>
									<p className='icon__property__item'>
										<span className='icon__property'></span>
										{t('cost')}:
									</p>
									<p className='price__detail__'>{asic.price_usdt} $</p>
								</div>
							</div>
						</div>
						<button className='detail__button__buy' onClick={handleBuyClick}>
							{t('buy')}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default DetailAsic
