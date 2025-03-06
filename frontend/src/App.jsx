import './App.css'
import MainNavigation from './Components/Widgets/MainNavigation/MainNavigation'
import MainPage from './Components/Pages/MainPage/MainPage.jsx'
import Catalog from './Components/Pages/Catalog/Catalog.jsx'
import DetailAsic from './Components/Pages/DetailAsic/DetailAsic.jsx'
import Footer from './Components/Widgets/Footer/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom' // Добавлен useLocation
import Blog from './Components/Pages/Blog/Blog.jsx'
import BlogDetail from './Components/Pages/BlogDetail/BlogDetail.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'
import ForTelegram from './Components/Pages/ForTelegram/ForTelegram.jsx'
import TelegramLayOut from './Components/LayOut/TelegramLayOut/TelegramLayOut.jsx'
import Confidentiality from './Components/Pages/Confidentiality/Confidentiality.jsx'
import RulesPage from './Components/Pages/RulesPage/RulesPage.jsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'

function App() {
	const { t } = useTranslation()
	const location = useLocation() // Получаем текущий путь

	// Определяем, нужно ли рендерить MainNavigation и Footer
	const shouldRenderNavAndFooter = !location.pathname.startsWith(
		'/for-telegram-web-app'
	)

	return (
		<>
			<div className='content'>
				{shouldRenderNavAndFooter && <MainNavigation />}{' '}
				{/* Условный рендеринг */}
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='catalog/' element={<Catalog />} />
					<Route path='catalog/:slug/' element={<DetailAsic />} />
					<Route path='news/' element={<Blog />} />
					<Route path='news/:slug/' element={<BlogDetail />} />
					<Route path='contact/' element={<Contact />} />
					<Route path='confidentiality/' element={<Confidentiality />} />
					<Route path='rules/' element={<RulesPage />} />

					<Route element={<TelegramLayOut />}>
						<Route path='for-telegram-web-app/' element={<ForTelegram />} />
					</Route>
				</Routes>
				{shouldRenderNavAndFooter && <Footer />} {/* Условный рендеринг */}
			</div>
		</>
	)
}

export default App
