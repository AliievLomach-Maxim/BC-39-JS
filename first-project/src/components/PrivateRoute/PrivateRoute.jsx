import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAlertContext } from '../../Context/AlertContext'

const PrivateRoute = ({ children }) => {
	const { isAuth } = useAlertContext()
	if (!isAuth) return <Navigate to={'/'} />
	return children
}

export default PrivateRoute
