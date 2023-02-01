import React from 'react'

export const Input = ({
	name,
	inputName,
	type = 'text',
	handleChange,
	value,
}) => {
	return (
		<div className='mb-3'>
			<label
				htmlFor='exampleInputEmail1'
				className='form-label'
			>
				{name}
			</label>
			<input
				name={inputName}
				type={type}
				className='form-control'
				id='exampleInputEmail1'
				onChange={handleChange}
				value={value}
			/>
		</div>
	)
}
