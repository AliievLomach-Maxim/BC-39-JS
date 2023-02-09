import { useSelector } from 'react-redux'

import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = useSelector((state) => state.auth.access_token)
	if (!isAuth) return <Navigate to={'/'} />
	return children
}

export default PrivateRoute
