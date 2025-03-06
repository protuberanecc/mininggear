import './MiningGearSection.css'
import MiningGearSectionCard from '../../../UI/MainPageHeroSection/MiningGearSectionCard/MiningGearSectionCard.jsx'
import image1 from '../../../../assets/images/main_page_imgs/m1.png'
import image2 from '../../../../assets/images/main_page_imgs/m2.png'
import image3 from '../../../../assets/images/main_page_imgs/m3.png'
import image4 from '../../../../assets/images/main_page_imgs/m4.png'
import image5 from '../../../../assets/images/main_page_imgs/news.png'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'

function MiningGearSection() {
	const { t } = useTranslation()
	return (
		<section className='mining__gear__section'>
			<h1 className='mining__gear__section__h1'>
				<h1>Mining</h1>
				<h1>Gear</h1>
			</h1>
			<div className='mining__gear__section__content'>
				<h2 className='mining__gear__section__content__h2 default__title__size'>
					{t('mining_for_everyone')}
				</h2>
				<div className='mining__gear__section__items__content'>
					<MiningGearSectionCard
						title={t('popular__asic')}
						text={t('popular_text')}
						image={image1}
						link_title={t('more')}
						link='/catalog?filter=popular' // Добавляем параметр
					/>

					<MiningGearSectionCard
						title={t('home_mining')}
						text={t('home_mining_text')}
						image={image2}
						link_title={t('more')}
						link='/catalog?filter=home_mining' // Добавляем параметр
					/>

					<MiningGearSectionCard
						title={t('classic_mining')}
						text={t('classic_mining_text')}
						image={image3}
						link_title={t('more')}
						link='/catalog?filter=classic' // Добавляем параметр
					/>

					<MiningGearSectionCard
						title={t('more_profit')}
						text={t('more_profit_text')}
						image={image4}
						link_title={t('more')}
						link='/catalog?filter=profitable' // Добавляем параметр
					/>

					<MiningGearSectionCard
						title={t('news_title')}
						text={t('news_title_text')}
						image={image5}
						link_title={t('read_all')}
						different={true}
						link='/news' // Ссылка на новости (без фильтра)
					/>
				</div>
			</div>
		</section>
	)
}

export default MiningGearSection
