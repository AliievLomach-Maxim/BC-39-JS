import React from 'react'

const Modal = ({ children, onClose }) => {
	console.log('children :>> ', children)
	return (
		<div className='modal-backdrop fade show'>
			<div
				className='modal fade show'
				style={{ display: 'block' }}
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Search Modal</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='Close'
								onClick={onClose}
							></button>
						</div>
						<div className='modal-body'>
							<p>{children}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
