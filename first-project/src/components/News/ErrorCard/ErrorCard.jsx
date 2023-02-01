import React from 'react'

const ErrorCard = ({ message, title = 'Error' }) => {
	return (
		<div className='card mt-2'>
			<div className='card-body bg-danger'>
				<h5 className='card-title text-center'>{title}</h5>
				<p className='card-text'>{message}</p>
			</div>
		</div>
	)
}

export default ErrorCard
