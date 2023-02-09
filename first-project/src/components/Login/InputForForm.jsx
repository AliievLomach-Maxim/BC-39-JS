import React from 'react'

const InputForForm = ({
	handleChange,
	value,
	label,
	name,
	type = 'text',
	children,
}) => {
	return (
		<div className='mb-3'>
			<label htmlFor={`exampleInput${name}`} className='form-label'>
				{label}
			</label>
			<input
				name={name}
				type={type}
				className='form-control'
				id={`exampleInput${name}`}
				onChange={handleChange}
				value={value}
			/>
			{name === 'email' && (
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			)}
		</div>
	)
}

export default InputForForm
