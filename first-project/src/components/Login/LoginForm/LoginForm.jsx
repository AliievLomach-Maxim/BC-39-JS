import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {
	getProfile,
	loginUser,
} from '../../../services/auth-services/auth-service'
import { authThunk, profileThunk } from '../../../store/auth/thunk'
import { useDispatch, useSelector } from 'react-redux'

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
		// loginUser({ email, password }).then(console.log)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					name='email'
					type='text'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					onChange={handleChange}
					value={email}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					name='password'
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					onChange={handleChange}
					value={password}
				/>
			</div>
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
