import { useEffect, useState } from 'react'
import axios from 'axios'

function useBtcPrice() {
	const [btcPrice, setBtcPrice] = useState(null)

	useEffect(() => {
		const cachedPrice = localStorage.getItem('btcPrice')
		const cachedTimestamp = localStorage.getItem('btcPriceTimestamp')
		const now = Date.now()
		const fiveMinutes = 0.5 * 60 * 1000

		if (
			cachedPrice &&
			cachedTimestamp &&
			now - Number(cachedTimestamp) < fiveMinutes
		) {
			// Используем кэшированное значение, если оно получено менее 5 минут назад
			setBtcPrice(Number(cachedPrice))
		} else {
			// Запрашиваем актуальную цену
			axios
				.get(
					'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
				)
				.then(response => {
					const price = response.data.bitcoin.usd
					setBtcPrice(price)
					localStorage.setItem('btcPrice', price)
					localStorage.setItem('btcPriceTimestamp', now)
				})
				.catch(console.error)
		}
	}, [])

	return btcPrice
}

export default useBtcPrice
