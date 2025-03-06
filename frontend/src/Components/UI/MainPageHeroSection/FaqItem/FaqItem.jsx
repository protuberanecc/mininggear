import './FaqItem.css'
import Plus from '../Plus/Plus'
import React, { useState } from 'react'

function FaqItem(props) {
	const [close, setClose] = useState(true)

	const checkClose = () => {
		setClose(!close)
	}
	return (
		<>
			<div
				onClick={checkClose}
				className={close ? 'faq__item' : 'faq__item faq__item__open'}
			>
				<div className='faq__item__title'>
					<h2>{props.title}</h2>
					<div className='faq__item__title__svg'>
						<Plus />
					</div>
				</div>
				<div className='faq__item__content'>
					<p>{props.text}</p>
				</div>
			</div>
		</>
	)
}

export default FaqItem
