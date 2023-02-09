import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { signInUser } from '../../../services/auth-services/auth-service'
import { toast } from 'react-hot-toast'

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
			<div className='mb-3'>
				<label htmlFor='exampleInputUserName' className='form-label'>
					User Name
				</label>
				<input
					name='userName'
					type='text'
					className='form-control'
					id='exampleInputUserName'
					onChange={handleChange}
					value={userName}
				/>
			</div>
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
				<Link to={'/login'}>Login</Link>
			</div>
			<button type='submit' className='btn btn-primary placeholder-glow'>
				Create User
			</button>
		</form>
	)
}

export default SignInForm
