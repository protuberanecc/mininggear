import './MainPage.css'
import HeroSection from '../../Widgets/MainPageWidgets/HeroSection/HeroSection.jsx'
import MiningGearSection from '../../Widgets/MainPageWidgets/MiningGearSection/MiningGearSection.jsx'
import Form from '../../Widgets/MainPageWidgets/Form/Form.jsx'
import FAQ from '../../Widgets/MainPageWidgets/FAQ/FAQ.jsx'

function MainPage() {
	return (
		<>
			<HeroSection />
			<MiningGearSection />
			<FAQ />
			<Form />
		</>
	)
}

export default MainPage
