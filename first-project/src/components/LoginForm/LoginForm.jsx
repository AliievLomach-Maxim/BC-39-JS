import { Component } from 'react'

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		check: false,
	}

	handleChange = ({ target }) => {
		const { name, value } = target
		this.setState({
			[name]: value,
		})
	}
	handleChangeCheck = ({ target }) => {
		this.setState({
			check: !this.state.check,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.send({ ...this.state })
		this.setState({
			email: '',
			password: '',
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
						onChange={this.handleChange}
						value={this.state.email}
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
						onChange={this.handleChange}
						value={this.state.password}
					/>
				</div>
				<div className='mb-3 form-check'>
					<input
						onChange={this.handleChangeCheck}
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
						checked={this.state.check}
					/>
					<label
						className='form-check-label'
						htmlFor='exampleCheck1'
					>
						Check me out
					</label>
				</div>
				<button
					disabled={!this.state.check}
					type='submit'
					className='btn btn-primary'
				>
					Submit
				</button>
			</form>
		)
	}
}

export default LoginForm
