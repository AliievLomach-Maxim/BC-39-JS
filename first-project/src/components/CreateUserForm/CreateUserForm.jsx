import { Component } from 'react'
import { Input } from './Input'

class CreateUserForm extends Component {
	state = {
		firstName: '',
		secondName: '',
		address: '',
		phone: '',
	}

	// componentDidMount() {
	// 	console.log('Hello form')
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('Update')
	// 	console.log('prevProps :>> ', prevProps)
	// 	console.log('prevState', prevState)
	// }

	// componentWillUnmount() {
	// 	console.log('Unmount')
	// }

	handleChange = ({ target }) => {
		const { name, value } = target
		this.setState({
			[name]: value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.create({ ...this.state })
		this.setState({
			firstName: '',
			secondName: '',
			address: '',
			phone: '',
		})
		this.props.onClose()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					name='First Name'
					inputName='firstName'
					handleChange={this.handleChange}
					value={this.state.firstName}
				/>
				<Input
					name='Second Name'
					inputName='secondName'
					handleChange={this.handleChange}
					value={this.state.secondName}
				/>
				<Input
					name='Your Address'
					inputName='address'
					handleChange={this.handleChange}
					value={this.state.address}
				/>
				<Input
					name='Phone'
					type='phone'
					inputName='phone'
					handleChange={this.handleChange}
					value={this.state.phone}
				/>
				<button
					type='submit'
					className='btn btn-primary'
				>
					Create
				</button>
			</form>
		)
	}
}

export default CreateUserForm
