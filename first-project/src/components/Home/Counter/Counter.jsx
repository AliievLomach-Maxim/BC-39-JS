import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

// import { plusAction, minusAction } from '../../../store/counter/actionsCounter'
import { plusAction, minusAction } from '../../../store/counterWithSlice/slice'

const Counter = () => {
	const total = useSelector((state) => state.counter.total)
	const dispatch = useDispatch()

	const handleClickPlus = () => {
		dispatch(plusAction())
	}

	const handleClickMinus = () => {
		dispatch(minusAction())
	}

	return (
		<div className='card bg-dark text-white mx-auto w-100 mt-2'>
			<div className='card-body'>
				<h5 className='card-title text-center fs-1'>Counter</h5>
				<p
					className='card-text  text-center'
					style={{ fontSize: '80px' }}
				>
					{total}
				</p>
				<div className='d-flex justify-content-center px-5'>
					<button
						className='btn btn-outline-success me-5'
						onClick={handleClickPlus}
					>
						<i className='bi bi-plus-circle fs-1'></i>
					</button>
					<button
						className='btn  btn-outline-danger ms-5'
						onClick={handleClickMinus}
					>
						<i className='bi bi-dash-circle fs-1'></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
