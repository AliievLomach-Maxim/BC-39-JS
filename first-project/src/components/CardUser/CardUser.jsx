import React from 'react'

const CardUser = ({
	firstName,
	secondName,
	address,
	phone,
	handleDell,
	id,
}) => {
	return (
		<div
			className='card m-2'
			style={{ width: '18rem' }}
		>
			<div className='card-body'>
				<h5 className='card-title'>
					{firstName} {secondName}
				</h5>
				<p className='card-text'>Address: {address}</p>
				<p className='card-text'>Phone: {phone}</p>
				<button
					className='btn btn-danger'
					onClick={() => handleDell(id)}
				>
					Dell User
				</button>
			</div>
		</div>
	)
}

export default CardUser
