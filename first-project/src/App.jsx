import React, { Component } from 'react'
import CardUser from './components/CardUser'
import CreateUserForm from './components/CreateUserForm'
// import Counter from './components/Counter'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Modal from './components/Modal'

class App extends Component {
	state = {
		visibleLogin: false,
		visibleCreate: false,
		users: [],
	}

	toggleModalLogin = () => {
		this.setState((prevState) => ({ visibleLogin: !prevState.visibleLogin }))
	}

	toggleModalCreate = () => {
		this.setState((prevState) => ({ visibleCreate: !prevState.visibleCreate }))
	}

	sendData = (data) => {
		console.log(data)
	}

	createUser = (user) => {
		const newUser = {
			...user,
			id: Date.now(),
			lang: 'Ukr',
		}

		this.setState((prev) => ({ users: [...prev.users, newUser] }))
	}

	dellUser = (id) => {
		this.setState((prev) => ({
			users: prev.users.filter((user) => user.id !== id),
		}))
	}
	render() {
		return (
			<>
				<Header
					onShowModalLogin={this.toggleModalLogin}
					onShowModalCreate={this.toggleModalCreate}
				/>
				{this.state.users.length === 0 && (
					<div
						className='alert alert-danger mx-5 mt-2'
						role='alert'
					>
						User not found!
					</div>
				)}
				{/* <Counter /> */}
				{this.state.visibleLogin && (
					<Modal
						onClose={this.toggleModalLogin}
						type='Login'
					>
						<LoginForm send={this.sendData} />
					</Modal>
				)}
				{this.state.visibleCreate && (
					<Modal
						onClose={this.toggleModalCreate}
						type='Create'
					>
						<CreateUserForm
							create={this.createUser}
							onClose={this.toggleModalCreate}
						/>
					</Modal>
				)}
				{this.state.users.map(
					({ firstName, secondName, address, phone, id }) => (
						<CardUser
							key={id}
							id={id}
							handleDell={this.dellUser}
							firstName={firstName}
							secondName={secondName}
							address={address}
							phone={phone}
						/>
					)
				)}
			</>
		)
	}
}

export default App
