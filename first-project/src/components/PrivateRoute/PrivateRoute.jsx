import { useSelector } from 'react-redux'

import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const { pathname } = useLocation()
	const isAuth = useSelector((state) => state.auth.access_token)
	if (!isAuth) return <Navigate to={'/login'} state={pathname} />
	return children
}

export default PrivateRoute
