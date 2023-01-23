import { Component } from 'react'

class CardTimer extends Component {
	state = { time: new Date() }
	id = null
	setTime = () => {
		this.id = setInterval(() => {
			this.setState({ time: new Date() })
		}, 1000)
		// console.log(new Date())
		return (
			<>
				{this.state.time.getHours()}:{this.state.time.getMinutes()}:
				{this.state.time.getSeconds()}
			</>
		)
	}
	componentDidUpdate(prevProps, prevState) {
		clearInterval(this.id)
	}
	render() {
		return (
			<div
				className='card m-3'
				style={{ width: '18rem' }}
			>
				<div className='card-body'>
					<h5 className='card-title'>{this.setTime()}</h5>
				</div>
			</div>
		)
	}
}

export default CardTimer
