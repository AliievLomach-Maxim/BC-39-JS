import { useRef } from 'react'
import { useState, useEffect } from 'react'
import CardUser from '../CardUser'
import CreateUserForm from '../CreateUserForm'
import Modal from '../Modal'

const USERS_LOCAL_KEY = 'user-key'
const TIMER_ALERT = 2500

// function usePrevState(value) {
// 	const ref = useRef()
// 	useEffect(() => {
// 		ref.current = value
// 	})
// 	return ref.current
// }

const Users = () => {
	const [visibleCreate, setVisibleCreate] = useState(false)
	const [users, setUsers] = useState(null)
	const [isUserCreate, setIsUserCreate] = useState(false)
	const [isDellUser, setIsDellUser] = useState(false)

	// const prevState = usePrevState(users)

	useEffect(() => {
		// console.log('prevState', prevState)
		console.log('First render')
		const localData = localStorage.getItem(USERS_LOCAL_KEY)
		if (localData) {
			setUsers(JSON.parse(localData))
		} else setUsers([])
	}, [])

	useEffect(() => {
		users && localStorage.setItem(USERS_LOCAL_KEY, JSON.stringify(users))
		console.log('Users update')
		setIsUserCreate(true)
		setTimeout(() => {
			setIsUserCreate(false)
		}, TIMER_ALERT)
		// if (prevState.users.length < this.state.users.length) {
		// this.setState({ isUserCreate: true })
		// setTimeout(() => {
		// 	this.setState({ isUserCreate: false })
		// }, TIMER_ALERT)
		// } else if (prevState.users.length > this.state.users.length) {
		// 	this.setState({ isDellUser: true })
		// 	setTimeout(() => {
		// 		this.setState({ isDellUser: false })
		// 	}, TIMER_ALERT)
		// }
	}, [users])

	// componentDidUpdate(_, prevState) {
	// 	if (prevState.users && prevState.users.length < this.state.users.length) {
	// 		this.setState({ isUserCreate: true })
	// 		setTimeout(() => {
	// 			this.setState({ isUserCreate: false })
	// 		}, TIMER_ALERT)
	// 	} else if (
	// 		prevState.users &&
	// 		prevState.users.length > this.state.users.length
	// 	) {
	// 		this.setState({ isDellUser: true })
	// 		setTimeout(() => {
	// 			this.setState({ isDellUser: false })
	// 		}, TIMER_ALERT)
	// 	}
	// 	if (prevState.users && prevState.users.length !== this.state.users.length) {
	// 		localStorage.setItem(USERS_LOCAL_KEY, JSON.stringify(this.state.users))
	// 	}
	// }

	const toggleModalCreate = () => {
		// this.setState((prevState) => ({ visibleCreate: !prevState.visibleCreate }))
		setVisibleCreate(!visibleCreate)
	}

	const createUser = (user) => {
		const newUser = {
			...user,
			id: Date.now(),
			lang: 'Ukr',
		}
		setUsers((prev) => {
			return [...prev, newUser]
		})
	}

	const dellUser = (id) => {
		// this.setState((prev) => ({
		// 	users: prev.users.filter((user) => user.id !== id),
		// }))
		setUsers((prev) => {
			return prev.filter((user) => user.id !== id)
		})
	}

	return (
		<>
			{users && (
				<div className='container-fluid'>
					<div className='row'>
						<button
							className='btn btn-outline-success my-2 '
							onClick={toggleModalCreate}
						>
							Create User
						</button>

						{isUserCreate && (
							<div
								className='alert alert-success  '
								role='alert'
							>
								Create User !
							</div>
						)}
						{isDellUser && (
							<div
								className='alert alert-danger  '
								role='alert'
							>
								Dell User !
							</div>
						)}
						{users.length === 0 && (
							<div
								className='alert alert-warning  '
								role='alert'
							>
								User not found!
							</div>
						)}
						{visibleCreate && (
							<Modal
								onClose={toggleModalCreate}
								type='Create'
							>
								<CreateUserForm
									create={createUser}
									onClose={toggleModalCreate}
								/>
							</Modal>
						)}
						{users.map(({ firstName, secondName, address, phone, id }) => (
							<CardUser
								key={id}
								id={id}
								handleDell={dellUser}
								firstName={firstName}
								secondName={secondName}
								address={address}
								phone={phone}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Users

// class Users extends Component {
// 	state = {
// 		users: null,
// 		visibleCreate: false,
// 		isUserCreate: false,
// 		isDellUser: false,
// 	}

// 	componentDidMount() {
// 		const localData = localStorage.getItem(USERS_LOCAL_KEY)
// 		if (localData) {
// 			this.setState({ users: JSON.parse(localData) })
// 		} else this.setState({ users: [] })
// 	}

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.users && prevState.users.length < this.state.users.length) {
// 			this.setState({ isUserCreate: true })
// 			setTimeout(() => {
// 				this.setState({ isUserCreate: false })
// 			}, TIMER_ALERT)
// 		} else if (
// 			prevState.users &&
// 			prevState.users.length > this.state.users.length
// 		) {
// 			this.setState({ isDellUser: true })
// 			setTimeout(() => {
// 				this.setState({ isDellUser: false })
// 			}, TIMER_ALERT)
// 		}
// 		if (prevState.users && prevState.users.length !== this.state.users.length) {
// 			localStorage.setItem(USERS_LOCAL_KEY, JSON.stringify(this.state.users))
// 		}
// 	}

// 	toggleModalCreate = () => {
// 		this.setState((prevState) => ({ visibleCreate: !prevState.visibleCreate }))
// 	}

// 	createUser = (user) => {
// 		const newUser = {
// 			...user,
// 			id: Date.now(),
// 			lang: 'Ukr',
// 		}

// 		this.setState((prev) => ({ users: [...prev.users, newUser] }))
// 	}

// 	dellUser = (id) => {
// 		this.setState((prev) => ({
// 			users: prev.users.filter((user) => user.id !== id),
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				{this.state.users && (
// 					<div className='container-fluid'>
// 						<div className='row'>
// 							<button
// 								className='btn btn-outline-success my-2 '
// 								onClick={this.toggleModalCreate}
// 							>
// 								Create User
// 							</button>

// 							{this.state.isUserCreate && (
// 								<div
// 									className='alert alert-success  '
// 									role='alert'
// 								>
// 									Create User !
// 								</div>
// 							)}
// 							{this.state.isDellUser && (
// 								<div
// 									className='alert alert-danger  '
// 									role='alert'
// 								>
// 									Dell User !
// 								</div>
// 							)}
// 							{this.state.users.length === 0 && (
// 								<div
// 									className='alert alert-warning  '
// 									role='alert'
// 								>
// 									User not found!
// 								</div>
// 							)}
// 							{this.state.visibleCreate && (
// 								<Modal
// 									onClose={this.toggleModalCreate}
// 									type='Create'
// 								>
// 									<CreateUserForm
// 										create={this.createUser}
// 										onClose={this.toggleModalCreate}
// 									/>
// 								</Modal>
// 							)}
// 							{this.state.users.map(
// 								({ firstName, secondName, address, phone, id }) => (
// 									<CardUser
// 										key={id}
// 										id={id}
// 										handleDell={this.dellUser}
// 										firstName={firstName}
// 										secondName={secondName}
// 										address={address}
// 										phone={phone}
// 									/>
// 								)
// 							)}
// 						</div>
// 					</div>
// 				)}
// 			</>
// 		)
// 	}
// }

// export default Users
