import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useCustomContext } from '../../Context/CustomContext'

const PrivateRoute = ({ children }) => {
	// const { isAuth } = useCustomContext()
	const isAuth = useSelector((state) => state.auth.access_token)
	if (!isAuth) return <Navigate to={'/'} />
	return children
}

export default PrivateRoute
