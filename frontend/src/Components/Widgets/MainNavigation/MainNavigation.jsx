import React, { useState, useEffect } from 'react'
import './MainNavigation.css'
import LogoHeader from '../../UI/Header_UI/LogoHeader/LogoHeader.jsx'
import HeaderNavigation from '../../UI/Header_UI/HeaderNavigation/HeaderNavigation.jsx'
import MenuBtn from '../../UI/Header_UI/MenuBtn/MenuBtn.jsx'
import FixedMenu from '../../UI/Header_UI/FixedMenu/FixedMenu.jsx'
import LanguageChoice from '../LanguageChoice/LanguageChoice.jsx'

function MainNavigation() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			{isOpen ? <FixedMenu onclick={handleOpen} /> : ''}

			<div className='main__header__navigation '>
				<LogoHeader />

				{windowWidth > 1191 && <HeaderNavigation />}
				{windowWidth > 1191 && (
					<div className='lchoice__container'>
						<LanguageChoice />
					</div>
				)}
				{windowWidth < 1191 && (
					<div onClick={handleOpen} className='menu__is__open'>
						<MenuBtn />
					</div>
				)}
			</div>
		</>
	)
}

export default MainNavigation
