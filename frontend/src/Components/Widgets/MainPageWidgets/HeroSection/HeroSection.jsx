import './HeroSection.css'
import React, { useState, useEffect } from 'react'
import hero_logo_img from '../../../../assets/images/main_page_imgs/1.png'

import HeroLeftContent from '../../../UI/MainPageHeroSection/HeroLeftContent/HeroLeftContent.jsx'

function HeroSection() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const resizeWindowWidth = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', resizeWindowWidth)

		return () => {
			window.removeEventListener('resize', resizeWindowWidth)
		}
	}, [])
	return (
		<section className='main__page__hero__section'>
			{windowWidth >= 1190 && (
				<div className='main__page__hero__section__content main__page__hero__section__left border__hero1'>
					<div className='main__page__hero__section__left__content'>
						<HeroLeftContent />
					</div>
				</div>
			)}

			<div className='main__page__hero__section__content main__page__hero__section__right border__hero2'>
				<img src={hero_logo_img} alt='' />

				{windowWidth <= 1190 && <HeroLeftContent />}

				<div className='blub'></div>
			</div>
		</section>
	)
}

export default HeroSection
