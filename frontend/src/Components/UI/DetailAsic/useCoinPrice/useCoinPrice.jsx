import { useEffect, useState } from 'react'
import axios from 'axios'

function useCoinPrice(coinApiTitle) {
	const [coinPrice, setCoinPrice] = useState(null)

	useEffect(() => {
		if (!coinApiTitle) return

		const cachedPrice = localStorage.getItem(`${coinApiTitle}_price`)
		const cachedTimestamp = localStorage.getItem(
			`${coinApiTitle}_priceTimestamp`
		)
		const now = Date.now()
		const fiveMinutes = 0.5 * 60 * 1000

		if (
			cachedPrice &&
			cachedTimestamp &&
			now - Number(cachedTimestamp) < fiveMinutes
		) {
			setCoinPrice(Number(cachedPrice))
		} else {
			axios
				.get(
					`https://api.coingecko.com/api/v3/simple/price?ids=${coinApiTitle}&vs_currencies=usd`
				)
				.then(response => {
					const price = response.data[coinApiTitle]?.usd
					if (price) {
						setCoinPrice(price)
						localStorage.setItem(`${coinApiTitle}_price`, price)
						localStorage.setItem(`${coinApiTitle}_priceTimestamp`, now)
					}
				})
				.catch(console.error)
		}
	}, [coinApiTitle])

	return coinPrice
}

export default useCoinPrice
