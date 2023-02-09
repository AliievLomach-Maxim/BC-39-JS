import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-hot-toast'

import { signInUser } from '../../../services/auth-services/auth-service'
import InputForForm from '../InputForForm'

const SignInForm = () => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleChange = ({ target }) => {
		const { name, value } = target
		if (name === 'email') setEmail(value)
		else if (name === 'userName') setUserName(value)
		else setPassword(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		signInUser({
			name: userName,
			email,
			password,
			avatar: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png',
		})
			.then(() => {
				toast.success('Create user successfully')
				navigate('/login')
			})
			.catch((error) => toast.error(error.response.data.message))
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputForForm
				handleChange={handleChange}
				value={userName}
				label='User Name'
				name='userName'
			/>
			<InputForForm
				handleChange={handleChange}
				value={email}
				label='Email address'
				name='email'
			/>
			<InputForForm
				handleChange={handleChange}
				value={password}
				label='Password'
				name='password'
				type='password'
			/>
			<div className='mb-2'>
				<Link to={'/login'}>Login</Link>
			</div>
			<button type='submit' className='btn btn-primary'>
				Create User
			</button>
		</form>
	)
}

export default SignInForm
