import React from 'react'
import { Outlet } from 'react-router-dom'
import Users from '../components/Users'

const UsersPage = () => {
	return (
		<>
			<Users />
			<Outlet />
		</>
	)
}

export default UsersPage
