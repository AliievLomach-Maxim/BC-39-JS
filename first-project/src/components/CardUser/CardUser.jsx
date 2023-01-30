import React from 'react'
import { Link } from 'react-router-dom'

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
					disabled={!handleDell}
					className='btn btn-danger'
					onClick={() => handleDell(id)}
				>
					Dell User
				</button>

				{handleDell && (
					<Link
						className='btn btn-success mx-3'
						to={`user/${id}`}
					>
						Details
					</Link>
				)}
			</div>
		</div>
	)
}

export default CardUser
