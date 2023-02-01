import { useState, useEffect, useRef } from 'react'

const CardTimer = () => {
	const [time, setTime] = useState(() => new Date())

	const id = useRef(null)

	useEffect(() => {
		id.current = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(id.current)
		}
	}, [])

	return (
		<div
			className='card mt-2 w-100 text-center'
			style={{ width: '18rem' }}
		>
			<div className='card-body'>
				<h3>{time.toLocaleTimeString()}</h3>
			</div>
		</div>
	)
}

export default CardTimer
