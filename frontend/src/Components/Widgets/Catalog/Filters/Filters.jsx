import React from 'react'
import './Filters.css'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

const Filters = ({
	brands,
	selectedBrands,
	handleBrandClick,
	selectedMinCost,
	handleMinCostChange,
	selectedMaxCost,
	handleMaxCostChange,
	coins,
	selectedCoins,
	handleCoinClick,
	algos,
	selectedAlgos,
	handleAlgoClick,
	resetFilters,
	t,
}) => {
	return (
		<div className='filter__container'>
			<h1 className='catalog__title__section'>{t('filters')}</h1>
			<div className='filter__container__con'>
				{/* Фильтр по брендам */}
				<div className='filter__choice__container'>
					<h2>{t('brands')}</h2>
					{Object.entries(brands).map(([key, brand]) => (
						<div
							key={key}
							onClick={() => handleBrandClick(key)}
							className={`filter-item brand-item ${
								selectedBrands.includes(key) ? 'activ__filter__item' : ''
							}`}
						>
							{brand}
						</div>
					))}
				</div>

				{/* Фильтр по стоимости */}
				<div className='filter__choice__container'>
					<h2>{t('cost')}</h2>
					<div className='input__cost__con'>
						<input
							type='number'
							step={100}
							value={selectedMinCost}
							onChange={handleMinCostChange}
							placeholder={t('min_cost')}
							className='cost-filter media-cost-filter'
						/>
						<input
							type='number'
							step={100}
							value={selectedMaxCost}
							onChange={handleMaxCostChange}
							placeholder={t('max_cost')}
							className='cost-filter'
						/>
					</div>
				</div>

				{/* Фильтр по монетам */}
				<div className='filter__choice__container'>
					<h2>{t('coins')}</h2>
					{Object.entries(coins).map(([key, coin]) => (
						<div
							key={key}
							onClick={() => handleCoinClick(key)}
							className={`filter-item coin-item ${
								selectedCoins.includes(key) ? 'activ__filter__item' : ''
							}`}
						>
							{coin}
						</div>
					))}
				</div>

				{/* Фильтр по алгоритмам */}
				{/*<div className='filter__choice__container'>
					<h2>Алгоритмы</h2>
					{Object.entries(algos).map(([key, algo]) => (
						<div
							key={key}
							onClick={() => handleAlgoClick(key)}
							className={`filter-item algo-item ${
								selectedAlgos.includes(key) ? 'activ__filter__item' : ''
							}`}
						>
							{algo}
						</div>
					))}
				</div> */}

				{/* Кнопка для сброса всех фильтров */}
				<div className='filter__choice__container'>
					<div onClick={resetFilters} className='filter-item reset-all'>
						{t('reset_all_filters')}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filters
