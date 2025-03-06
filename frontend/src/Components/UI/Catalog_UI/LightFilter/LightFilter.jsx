import './LightFilter.css'
import { useTranslation } from 'react-i18next'
import '../../../../i18n'

function LightFilter({ onFilterChange = () => {}, selectedFilters = [] }) {
	const handleFilterChange = filter => {
		onFilterChange(filter)
	}

	const { t } = useTranslation()

	return (
		<div className='light__filter__container'>
			<div
				className={`light__filter__item ${
					selectedFilters.includes('popular')
						? 'light__filter__item__active'
						: ''
				}`}
				onClick={() => handleFilterChange('popular')}
			>
				{t('popular__asic')}
			</div>
			<div
				className={`light__filter__item ${
					selectedFilters.includes('home_mining')
						? 'light__filter__item__active'
						: ''
				}`}
				onClick={() => handleFilterChange('home_mining')}
			>
				{t('home_mining')}
			</div>
			<div
				className={`light__filter__item ${
					selectedFilters.includes('classic')
						? 'light__filter__item__active'
						: ''
				}`}
				onClick={() => handleFilterChange('classic')}
			>
				{t('classic_mining')}
			</div>
			<div
				className={`light__filter__item ${
					selectedFilters.includes('profitable')
						? 'light__filter__item__active'
						: ''
				}`}
				onClick={() => handleFilterChange('profitable')}
			>
				{t('more_profit')}
			</div>
		</div>
	)
}

export default LightFilter
