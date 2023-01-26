import React, { useEffect } from 'react'

const Modal = ({ type, children, onClose }) => {
	useEffect(() => {
		const handlePressESC = (e) => {
			if (e.code === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', handlePressESC)
		return () => {
			window.removeEventListener('keydown', handlePressESC)
		}
	}, [onClose])

	// 	componentDidMount() {
	// 	window.addEventListener('keydown', this.handlePressESC)
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener('keydown', this.handlePressESC)
	// }

	return (
		<div
			className='modal fade show'
			style={{ display: 'block' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>{type} Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={onClose}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

// class Modal extends Component {
// 	componentDidMount() {
// 		window.addEventListener('keydown', this.handlePressESC)
// 	}
// 	componentWillUnmount() {
// 		window.removeEventListener('keydown', this.handlePressESC)
// 	}
// 	handlePressESC = (e) => {
// 		if (e.code === 'Escape') {
// 			this.props.onClose()
// 		}
// 	}
// 	render() {
// 		const { type, children, onClose } = this.props
// 		return (
// 			<div
// 				className='modal fade show'
// 				style={{ display: 'block' }}
// 			>
// 				<div className='modal-dialog'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title'>{type} Modal</h5>
// 							<button
// 								type='button'
// 								className='btn-close'
// 								aria-label='Close'
// 								onClick={onClose}
// 							></button>
// 						</div>
// 						<div className='modal-body'>{children}</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Modal
