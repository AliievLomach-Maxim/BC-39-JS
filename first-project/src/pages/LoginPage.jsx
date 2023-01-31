import React from 'react'
import LoginForm from '../components/LoginForm'
import { useAlertContext } from '../Context/AlertContext'

const LoginPage = () => {
	const { login } = useAlertContext()
	// const { logout } = useContext(Context)
	return (
		<div className='card position-absolute top-50 start-50 translate-middle p-2'>
			<h1 className='text-center'>Login</h1>
			<LoginForm login={login} />
		</div>
	)
}

export default LoginPage
