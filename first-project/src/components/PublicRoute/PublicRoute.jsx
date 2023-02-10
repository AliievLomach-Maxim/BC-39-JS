import { useSelector } from 'react-redux'

import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { state } = useLocation()
	const isAuth = useSelector((state) => state.auth.access_token)
	if (isAuth) return <Navigate to={state ? state : '/'} />
	return children
}

export default PublicRoute
