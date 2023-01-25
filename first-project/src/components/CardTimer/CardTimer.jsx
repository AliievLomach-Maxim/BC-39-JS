import { useState, useEffect, useRef } from 'react'

const CardTimer = () => {
	const [time, setTime] = useState(() => new Date()) //!!!!

	// let id = null
	const id = useRef(null)

	useEffect(() => {
		// const createTime = () => {
		id.current = setInterval(() => {
			setTime(new Date())
		}, 1000)
		console.log('id.current', id.current)
		return () => {
			console.log('id :>> ', id)
			clearInterval(id.current)
		}
	}, [])

	// useEffect(() => {
	// 	console.log('id', id)
	// })

	// 	componentDidUpdate(prevProps, prevState) {
	// 		clearInterval(this.id)
	// 	}
	return (
		<div
			className='card mt-2 w-100 text-center'
			style={{ width: '18rem' }}
		>
			<div className='card-body'>
				<h3>{time.getSeconds().toString()}</h3>
			</div>
		</div>
	)
}

export default CardTimer

// class CardTimer extends Component {
// 	state = { time: new Date() }
// 	id = null
// 	setTime = () => {
// 		this.id = setInterval(() => {
// 			this.setState({ time: new Date() })
// 		}, 1000)
// 		return (
// 			<>
// 				{this.state.time.getHours().toString().padStart(2, 0)}:
// 				{this.state.time.getMinutes().toString().padStart(2, 0)}:
// 				{this.state.time.getSeconds().toString().padStart(2, 0)}
// 			</>
// 		)
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		clearInterval(this.id)
// 	}
// 	render() {
// 		return (
// 			<div
// 				className='card mt-2 w-100 text-center'
// 				style={{ width: '18rem' }}
// 			>
// 				<div className='card-body'>
// 					<h3>{this.setTime()}</h3>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default CardTimer
