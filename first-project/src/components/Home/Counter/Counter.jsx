import React, { PureComponent, useReducer } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { plusAction, minusAction } from '../../../store/counter/actionsCounter'

// function reducer(prevState, action) {
// 	if (action.type === 'plus') {
// 		return prevState + action.payload
// 	} else return prevState - action.payload
// }

const Counter = () => {
	// const [total, setTotal] = useState(0)
	// const [total, dispatch] = useReducer(reducer, 0)

	const total = useSelector((state) => state.counter.total)
	console.log(total)
	// const { total } = useSelector((state) => state.counter)
	// const { total, step } = useSelector((state) => state)
	// const step = useSelector((state) => state.step)

	const dispatch = useDispatch()

	const handleClickPlus = () => {
		// dispatch({ type: 'plus', payload: step })
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
					<Button
						obj={{ name: 'asd' }}
						handleClickPlus={handleClickPlus}
					/>
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

class Button extends PureComponent {
	render() {
		return (
			<button
				className='btn btn-outline-success me-5'
				onClick={this.props.handleClickPlus}
			>
				<i className='bi bi-plus-circle fs-1'></i>
			</button>
		)
	}
}
