import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filters from '../../Widgets/Catalog/Filters/Filters'
import AsicCard from '../../UI/Catalog_UI/AsicCard/AsicCard'
import Loader from '../../UI/Loader/Loader'
import OrderForm from '../../UI/Catalog_UI/OrderForm/OrderForm'
import './Catalog.css'
import { BASE_API_URL } from '../../../config'
import LightFilter from '../../UI/Catalog_UI/LightFilter/LightFilter'
import { useParams, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../i18n'

function Catalog() {
	const { t } = useTranslation()
	const [asics, setAsicList] = useState([]) // Асики
	const [brands, setBrandsList] = useState([]) // Бренды
	const [isLoading, setIsLoading] = useState(true) // Состояние загрузки
	const [selectedMinCost, setSelectedMinCost] = useState('') // Минимальная цена
	const [selectedMaxCost, setSelectedMaxCost] = useState('') // Максимальная цена
	const [coins, setCoinsList] = useState([]) // Монеты
	const [algos, setAlgosList] = useState([]) // Алгоритмы
	const [selectedBrands, setSelectedBrands] = useState([]) // Выбранные бренды
	const [selectedCoins, setSelectedCoins] = useState([]) // Выбранные монеты
	const [selectedAlgos, setSelectedAlgos] = useState([]) // Выбранные алгоритмы
	const [selectedFilters, setSelectedFilters] = useState([]) // Выбранные легкие фильтры
	const [windowWidth, setWindowWidth] = useState(window.innerWidth) // Ширина окна

	// Состояние для формы заказа
	const [openOrder, setOpenOrder] = useState(false) // Открытие формы заказа
	const [orderData, setOrderData] = useState(null) // Данные для заказа

	const [searchParams, setSearchParams] = useSearchParams()
	const filterFromURL = searchParams.get('filter')

	// Состояние для пагинации
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 15

	useEffect(() => {
		if (filterFromURL) {
			setSelectedFilters([filterFromURL]) // Устанавливаем фильтр из URL
		}
	}, [filterFromURL])

	useEffect(() => {
		axios.get(`${BASE_API_URL}asics/`).then(response => {
			setAsicList(response.data) // Получаем асиков
		})

		axios.get(`${BASE_API_URL}brands/`).then(response => {
			const brandMapping = response.data.reduce((acc, brand) => {
				acc[brand.pk] = brand.title
				return acc
			}, {})
			setBrandsList(brandMapping) // Получаем бренды
			setIsLoading(false)
		})

		axios.get(`${BASE_API_URL}coins/`).then(response => {
			const coinMapping = response.data.reduce((acc, coin) => {
				acc[coin.pk] = coin.title
				return acc
			}, {})
			setCoinsList(coinMapping) // Получаем монеты
		})

		axios.get(`${BASE_API_URL}algos/`).then(response => {
			const algoMapping = response.data.reduce((acc, algo) => {
				acc[algo.pk] = algo.title
				return acc
			}, {})
			setAlgosList(algoMapping) // Получаем алгоритмы
		})

		const resetWindowWidth = () => setWindowWidth(window.innerWidth) // Обработчик для изменения размера окна
		window.addEventListener('resize', resetWindowWidth)
		return () => window.removeEventListener('resize', resetWindowWidth) // Убираем обработчик при размонтировании
	}, [])

	// Функции для изменения фильтров
	const handleMinCostChange = e => {
		setSelectedMinCost(e.target.value)
		setSelectedFilters([]) // Сбрасываем легкие фильтры при изменении основного фильтра
	}

	const handleMaxCostChange = e => {
		setSelectedMaxCost(e.target.value)
		setSelectedFilters([]) // Сбрасываем легкие фильтры при изменении основного фильтра
	}

	const handleBrandClick = brandId => {
		setSelectedBrands(prev =>
			prev.includes(brandId)
				? prev.filter(id => id !== brandId)
				: [...prev, brandId]
		)
		setSelectedFilters([]) // Сбрасываем легкие фильтры при изменении основного фильтра
	}

	const handleCoinClick = coinId => {
		setSelectedCoins(prev =>
			prev.includes(coinId)
				? prev.filter(id => id !== coinId)
				: [...prev, coinId]
		)
		setSelectedFilters([]) // Сбрасываем легкие фильтры при изменении основного фильтра
	}

	const handleAlgoClick = algoId => {
		setSelectedAlgos(prev =>
			prev.includes(algoId)
				? prev.filter(id => id !== algoId)
				: [...prev, algoId]
		)
		setSelectedFilters([]) // Сбрасываем легкие фильтры при изменении основного фильтра
	}

	const resetFilters = () => {
		setSelectedBrands([]) // Сбрасываем основные фильтры
		setSelectedMinCost('')
		setSelectedMaxCost('')
		setSelectedCoins([])
		setSelectedAlgos([])
		setSelectedFilters([]) // Сбрасываем легкие фильтры
	}

	// Фильтрация асиков по выбранным фильтрам
	const filteredAsics = asics.filter(asic => {
		const matchesBrand =
			selectedBrands.length === 0 || selectedBrands.includes(String(asic.brand))
		const matchesMinCost =
			!selectedMinCost ||
			parseFloat(asic.price_usdt) >= parseFloat(selectedMinCost)
		const matchesMaxCost =
			!selectedMaxCost ||
			parseFloat(asic.price_usdt) <= parseFloat(selectedMaxCost)
		const matchesCoin =
			selectedCoins.length === 0 || selectedCoins.includes(String(asic.coin))
		const matchesAlgo =
			selectedAlgos.length === 0 || selectedAlgos.includes(String(asic.algo))

		// Фильтрация по легким фильтрам (только один фильтр может быть активен)
		const matchesFilters =
			selectedFilters.length === 0 ||
			selectedFilters.some(filter => {
				switch (filter) {
					case 'popular':
						return asic.popular
					case 'home_mining':
						return asic.home_mining
					case 'classic':
						return asic.classic
					case 'profitable':
						return asic.profitable
					default:
						return true
				}
			})

		return (
			matchesBrand &&
			matchesMinCost &&
			matchesMaxCost &&
			matchesCoin &&
			matchesAlgo &&
			matchesFilters
		)
	})

	// Пагинация
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentAsics = filteredAsics.slice(indexOfFirstItem, indexOfLastItem)
	const totalPages = Math.ceil(filteredAsics.length / itemsPerPage)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber) // Обновляем текущую страницу
	}

	// Обработка клика "Купить" (из карточки)
	const handleBuyClick = asic => {
		setOrderData({
			model: asic.title,
			unitPrice: asic.price_usdt,
			quantity: 1,
			total: asic.price_usdt,
		})
		setOpenOrder(true)
	}

	// Обработчики для формы заказа
	const handleCloseOrder = () => {
		setOpenOrder(false)
		setOrderData(null)
	}

	const handleQuantityChange = newQuantity => {
		setOrderData(prev => ({
			...prev,
			quantity: newQuantity,
			total: newQuantity * prev.unitPrice,
		}))
	}

	const handleSubmitOrder = e => {
		e.preventDefault()
		console.log('Заказ из каталога:', orderData)
		// Логика отправки заказа (через Telegram) обрабатывается внутри OrderForm
	}

	const handleFilterChange = filter => {
		// Сбрасываем основные фильтры при выборе легкого фильтра
		setSelectedBrands([])
		setSelectedMinCost('')
		setSelectedMaxCost('')
		setSelectedCoins([])
		setSelectedAlgos([])

		// Устанавливаем только один легкий фильтр
		setSelectedFilters([filter])
	}

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
			<div className='catalog__main__container'>
				<h1 className='catalog__title'>{t('catalog')}</h1>
				<LightFilter
					onFilterChange={handleFilterChange}
					selectedFilters={selectedFilters}
				/>
				<div className='filters__and__asics__container'>
					<Filters
						t={t}
						brands={brands}
						selectedBrands={selectedBrands}
						handleBrandClick={handleBrandClick}
						selectedMinCost={selectedMinCost}
						handleMinCostChange={handleMinCostChange}
						selectedMaxCost={selectedMaxCost}
						handleMaxCostChange={handleMaxCostChange}
						coins={coins}
						selectedCoins={selectedCoins}
						handleCoinClick={handleCoinClick}
						algos={algos}
						selectedAlgos={selectedAlgos}
						handleAlgoClick={handleAlgoClick}
						resetFilters={resetFilters}
					/>

					<div className='asic__card__container_con'>
						<h1 className='catalog__title__section'>{t('available_model')}</h1>

						{isLoading ? (
							<Loader />
						) : (
							<div className='asic__card__container_con_p'>
								{currentAsics.map(asic => (
									<AsicCard
										key={asic.pk}
										title={asic.title}
										hash={asic.hash}
										hash_title={asic.hash_title}
										power={asic.power}
										price_usdt={asic.price_usdt}
										algo={algos[asic.algo]}
										brand={asic.brand}
										coin={coins[asic.coin]}
										hot={asic.hot}
										slug={asic.slug}
										pk={asic.pk}
										brandName={brands[asic.brand]}
										image={asic.image}
										onBuyClick={() => handleBuyClick(asic)}
									/>
								))}
							</div>
						)}

						{/* Пагинация */}
						<div className='pagination'>
							{Array.from({ length: totalPages }, (_, index) => (
								<button
									key={index + 1}
									onClick={() => handlePageChange(index + 1)}
									className={`page-button ${
										currentPage === index + 1 ? 'active' : ''
									}`}
								>
									{index + 1}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Catalog
