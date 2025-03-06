import './ForTelegram.css'
import catalog_img from '../../../assets/images/main_page_imgs/2.png'
import MainLinks from '../../UI/ForTelegram/MainLinks/MainLinks'

function ForTelegram() {
	return (
		<>
			<section className='for__telegram__main__page'>
				<MainLinks title='Каталог' img={catalog_img} />
				<MainLinks title='Калькулятор' img={catalog_img} />
			</section>
		</>
	)
}

export default ForTelegram
