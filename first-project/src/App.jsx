import React, { Component } from 'react'
import CardTimer from './components/CardTimer'
// import Counter from './components/Counter'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Modal from './components/Modal'
import Users from './components/Users'

class App extends Component {
	state = {
		visibleLogin: false,
	}

	toggleModalLogin = () => {
		this.setState((prevState) => ({ visibleLogin: !prevState.visibleLogin }))
	}

	sendData = (data) => {
		console.log(data)
	}

	render() {
		return (
			<>
				<Header onShowModalLogin={this.toggleModalLogin} />
				<CardTimer />
				<Users />
				{/* <Counter /> */}
				{this.state.visibleLogin && (
					<Modal
						onClose={this.toggleModalLogin}
						type='Login'
					>
						<LoginForm send={this.sendData} />
					</Modal>
				)}
			</>
		)
	}
}

export default App
