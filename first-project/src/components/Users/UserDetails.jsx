import React from 'react'
import { useSelector } from 'react-redux'

import { Link, useLocation, useParams } from 'react-router-dom'

import CardUser from './CardUser/CardUser'

const UserDetails = () => {
	const { usersList } = useSelector((state) => state.users)

	const location = useLocation()

	const params = useParams()
	const { id } = params

	const userDetails = usersList.filter((user) => user.id === id)

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
