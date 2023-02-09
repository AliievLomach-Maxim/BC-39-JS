import React from 'react'
import SignInForm from '../components/Login/SignInForm/SignInForm'

const SignInPage = () => (
	<div
		className='card position-absolute top-50 start-50 translate-middle p-2'
		style={{ minWidth: '350px' }}
	>
		<h1 className='text-center'>Sign In</h1>
		<SignInForm />
	</div>
)

export default SignInPage
