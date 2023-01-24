import React, { Component } from 'react'
import { Toaster } from 'react-hot-toast'
import ContentInfo from './components/ContentInfo'
// import CardTimer from './components/CardTimer'
// import Counter from './components/Counter'
import Header from './components/Header'
// import LoginForm from './components/LoginForm'
// import Modal from './components/Modal'
import Search from './components/Search'
// import Users from './components/Users'

class App extends Component {
	state = {
		visibleLogin: false,
		searchText: '',
	}

	toggleModalLogin = () => {
		this.setState((prevState) => ({ visibleLogin: !prevState.visibleLogin }))
	}

	// sendData = (data) => {
	// 	console.log(data)
	// }

	handleSubmit = (searchText) => {
		this.setState({ searchText })
	}

	render() {
		return (
			<div className='container'>
				<Toaster
					position='top-right'
					toastOptions={{ duration: 1500 }}
				/>
				<Header onShowModalLogin={this.toggleModalLogin} />
				<Search onSearch={this.handleSubmit} />
				<ContentInfo value={this.state.searchText} />
				{/* <CardTimer /> */}
				{/* <Users /> */}

				{/* <Counter /> */}
				{/* {this.state.visibleLogin && (
					<Modal
						onClose={this.toggleModalLogin}
						type='Login'
					>
						<LoginForm send={this.sendData} />
					</Modal>
				)} */}
			</div>
		)
	}
}

export default App
