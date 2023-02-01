import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import CardUser from './CardUser/CardUser'

const USERS_LOCAL_KEY = 'user-key'

const UserDetails = () => {
	const [users, setUsers] = useState(null)
	const [userDetails, setUserDetails] = useState(null)

	const location = useLocation()

	const params = useParams()
	const { id } = params

	useEffect(() => {
		const localData = localStorage.getItem(USERS_LOCAL_KEY)
		if (localData) {
			setUsers(JSON.parse(localData))
		} else setUsers([])
	}, [])

	useEffect(() => {
		users && setUserDetails(users.filter((user) => user.id === Number(id)))
	}, [id, users])

	return (
		<>
			<Link
				to={location.state ?? '/users'}
				className='btn btn-secondary mt-2'
			>
				Back
			</Link>
			{userDetails?.length > 0 && (
				<CardUser
					id={id}
					firstName={userDetails[0].firstName}
					secondName={userDetails[0].secondName}
					address={userDetails[0].address}
					phone={userDetails[0].phone}
				/>
			)}
		</>
	)
}

export default UserDetails
