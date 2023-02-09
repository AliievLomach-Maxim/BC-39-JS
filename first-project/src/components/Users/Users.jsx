import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import CardUser from './CardUser'
import CreateUserForm from './CreateUserForm'
import Modal from '../UI Component/Modal'
import FilterUsers from './FilterUsers'

import { createUser, deleteUser } from '../../store/users/slices/usersSlice'
import { usersFilteredListSelector } from '../../store/selectors/usersSelectors/selectors'

const Users = () => {
	const [visibleCreate, setVisibleCreate] = useState(false)
	const [counter, setCounter] = useState(0)

	const dispatch = useDispatch()

	const filteredUsers = useSelector(usersFilteredListSelector)

	const toggleModalCreate = () => {
		setVisibleCreate((prev) => !prev)
	}

	const dellUser = (id) => {
		dispatch(deleteUser(id))
	}

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>
				{counter}
			</button>
			<FilterUsers />
			<div className='container-fluid'>
				<div className='row'>
					<button
						className='btn btn-outline-success my-2 '
						onClick={toggleModalCreate}
					>
						Create User
					</button>

					{filteredUsers.length === 0 && (
						<div className='alert alert-warning  ' role='alert'>
							User not found!
						</div>
					)}
					{visibleCreate && (
						<Modal onClose={toggleModalCreate} type='Create'>
							<CreateUserForm
								create={(value) => dispatch(createUser(value))}
								onClose={toggleModalCreate}
							/>
						</Modal>
					)}
					{filteredUsers.length > 0 &&
						filteredUsers.map(
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
		</>
	)
}

export default Users
