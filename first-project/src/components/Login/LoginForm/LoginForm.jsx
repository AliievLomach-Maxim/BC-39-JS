import { useState } from 'react'

import { useCustomContext } from '../../../Context/CustomContext'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [check, setCheck] = useState(false)

	const { login } = useCustomContext()

	const handleChange = ({ target }) => {
		const { name, value } = target
		if (name === 'email') setEmail(value)
		else setPassword(value)
	}

	const handleChangeCheck = () => {
		setCheck(!check)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		login({
			email,
			password,
		})
		setEmail('')
		setPassword('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label
					htmlFor='exampleInputEmail1'
					className='form-label'
				>
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
				<div
					id='emailHelp'
					className='form-text'
				>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleInputPassword1'
					className='form-label'
				>
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
			<div className='mb-3 form-check'>
				<input
					onChange={handleChangeCheck}
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					checked={check}
				/>
				<label
					className='form-check-label'
					htmlFor='exampleCheck1'
				>
					Check me out
				</label>
			</div>
			<button
				disabled={!check}
				type='submit'
				className='btn btn-primary'
			>
				Submit
			</button>
		</form>
	)
}

export default LoginForm
