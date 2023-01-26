import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ContentInfo from './components/ContentInfo'
import CardTimer from './components/CardTimer'
import Counter from './components/Counter'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Modal from './components/Modal'
import Search from './components/Search'
import Users from './components/Users'
// import TestUseMemo from './components/TestUseMemo'

const App = () => {
	const [searchText, setSearchText] = useState('')
	const [visibleLogin, setVisibleLogin] = useState(false)

	const toggleModalLogin = () => {
		setVisibleLogin((prevState) => !prevState)
	}

	const sendData = (data) => {
		console.log(data)
	}

	return (
		<div className='container'>
			<Toaster
				position='top-right'
				toastOptions={{ duration: 1500 }}
			/>
			<Header onShowModalLogin={toggleModalLogin} />
			<CardTimer />
			<Search onSearch={setSearchText} />
			<Counter />
			<Users />
			<ContentInfo value={searchText} />

			{visibleLogin && (
				<Modal
					onClose={toggleModalLogin}
					type='Login'
				>
					<LoginForm send={sendData} />
				</Modal>
			)}
			{/* <TestUseMemo /> */}
		</div>
	)
}

export default App

// class App extends Component {
// state = {
// 	visibleLogin: false,
// 	searchText: '',
// }

// 	toggleModalLogin = () => {
// 		this.setState((prevState) => ({ visibleLogin: !prevState.visibleLogin }))
// 	}

// 	sendData = (data) => {
// 		console.log(data)
// 	}

// 	handleSubmit = (searchText) => {
// 		this.setState({ searchText })
// 	}

// 	render() {
// 		return (
// 			<div className='container'>
// 				<Toaster
// 					position='top-right'
// 					toastOptions={{ duration: 1500 }}
// 				/>
// 				<Header onShowModalLogin={this.toggleModalLogin} />
// 				<CardTimer />
// 				<Search onSearch={this.handleSubmit} />
// 				<Counter />
// 				<Users />
// 				<ContentInfo value={this.state.searchText} />

// 				{this.state.visibleLogin && (
// 					<Modal
// 						onClose={this.toggleModalLogin}
// 						type='Login'
// 					>
// 						<LoginForm send={this.sendData} />
// 					</Modal>
// 				)}
// 			</div>
// 		)
// 	}
// }

// export default App
