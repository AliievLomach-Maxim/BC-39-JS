import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCustomContext } from '../../Context/CustomContext'

const PrivateRoute = ({ children }) => {
	const { isAuth } = useCustomContext()
	if (!isAuth) return <Navigate to={'/'} />
	return children
}

export default PrivateRoute
