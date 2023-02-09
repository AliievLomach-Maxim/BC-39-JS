import React from 'react'

import LoginForm from '../components/Login/LoginForm/LoginForm'

const LoginPage = () => (
	<div
		className='card position-absolute top-50 start-50 translate-middle p-2'
		style={{ minWidth: '350px' }}
	>
		<h1 className='text-center'>Login</h1>
		<LoginForm />
	</div>
)

export default LoginPage
