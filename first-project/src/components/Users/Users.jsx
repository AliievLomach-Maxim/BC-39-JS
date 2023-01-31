import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'

import CardUser from '../CardUser'
import CreateUserForm from '../CreateUserForm'
import Modal from '../Modal'
import FilterUsers from './FilterUsers'

const USERS_LOCAL_KEY = 'user-key'

const Users = () => {
	const [visibleCreate, setVisibleCreate] = useState(false)
	const [users, setUsers] = useState(null)
	const [filteredUsers, setFilteredUsers] = useState([])

	const [searchParams, setSearchParams] = useSearchParams()

	const ref = useRef(users)
	const prevUsers = ref.current
	// const arr = Object.fromEntries([...searchParams])
	// console.log('arr', arr)
	// setSearchParams({ ...arr, filter: 'new' })

	const filterParams = searchParams.get('filter') ?? ''

	useEffect(() => {
		const localData = localStorage.getItem(USERS_LOCAL_KEY)
		if (localData) {
			setUsers(JSON.parse(localData))
		} else setUsers([])
	}, [])

	useEffect(() => {
		ref.current = users

		setFilteredUsers(
			users?.filter((user) =>
				user.firstName.toLowerCase().includes(filterParams.toLowerCase())
			)
		)

		if (prevUsers?.length < users?.length) {
			toast.success('Create new user successfully')
		} else if (prevUsers?.length > users?.length) {
			toast.success('Dell user successfully')
		}

		users && localStorage.setItem(USERS_LOCAL_KEY, JSON.stringify(users))
	}, [users, prevUsers?.length, filterParams])

	const toggleModalCreate = () => {
		setVisibleCreate((prev) => !prev)
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
		setUsers((prev) => {
			return prev.filter((user) => user.id !== id)
		})
	}

	return (
		<>
			<FilterUsers
				setSearchParams={setSearchParams}
				filterParams={filterParams}
			/>
			{filteredUsers && (
				<div className='container-fluid'>
					<div className='row'>
						<button
							className='btn btn-outline-success my-2 '
							onClick={toggleModalCreate}
						>
							Create User
						</button>

						{filteredUsers.length === 0 && (
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
						{filteredUsers.map(
							({ firstName, secondName, address, phone, id }) => (
								<CardUser
									key={id}
									id={id}
									handleDell={dellUser}
									firstName={firstName}
									secondName={secondName}
									address={address}
									phone={phone}
								/>
							)
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Users
