import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { authThunk, profileThunk } from '../../../store/auth/thunk'
import InputForForm from '../InputForForm'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { isLoading } = useSelector((state) => state.auth)
	const isAuth = useSelector((state) => state.auth.access_token)

	useEffect(() => {
		isAuth && dispatch(profileThunk())
		isAuth && navigate('/')
	}, [dispatch, isAuth, navigate])

	const handleChange = ({ target }) => {
		const { name, value } = target
		if (name === 'email') setEmail(value)
		else setPassword(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(authThunk({ email, password }))
	}

	return (
		<form onSubmit={handleSubmit}>
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
				<Link to={'/signIn'}>SignIn</Link>
			</div>
			<button
				disabled={isLoading}
				type='submit'
				className='btn btn-primary'
			>
				Submit
			</button>
		</form>
	)
}

export default LoginForm
