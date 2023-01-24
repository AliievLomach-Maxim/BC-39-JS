import { Component } from 'react'

class CardTimer extends Component {
	state = { time: new Date() }
	id = null
	setTime = () => {
		this.id = setInterval(() => {
			this.setState({ time: new Date() })
		}, 1000)
		return (
			<>
				{this.state.time.getHours().toString().padStart(2, 0)}:
				{this.state.time.getMinutes().toString().padStart(2, 0)}:
				{this.state.time.getSeconds().toString().padStart(2, 0)}
			</>
		)
	}
	componentDidUpdate(prevProps, prevState) {
		clearInterval(this.id)
	}
	render() {
		return (
			<div
				className='card mt-2 w-100 text-center'
				style={{ width: '18rem' }}
			>
				<div className='card-body'>
					<h3>{this.setTime()}</h3>
				</div>
			</div>
		)
	}
}

export default CardTimer
