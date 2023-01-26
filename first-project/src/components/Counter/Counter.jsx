import React, { PureComponent, useReducer, useState } from 'react'

function reducer(prevState, action) {
	// if (action.type === 'createUser') {
	// 	return { ...prevState, users: action.payload }
	// } else if (action.type === ' getNews') {
	// 	return { ...prevState, news: action.payload.push(123) }
	// } else if (action.payload === 'createNewObj') {
	// 	return {
	// 		...prevState,
	// 		news: action.payload.news,
	// 		users: action.payload.users,
	// 		count: action.payload.count,
	// 		pages: action.payload.pages,
	// 	}
	// }

	if (action.type === 'plus') {
		return prevState + action.payload
	} else return prevState - action.payload
}

const Counter = () => {
	// const [total, setTotal] = useState(0)
	const [total, dispatch] = useReducer(reducer, 0)
	// const [state, dispatch] = useReducer(reducer, {
	// 	user: null,
	// 	news: [],
	// 	count: 0,
	// })
	// const [user, setuser] = useState(0)
	// const [news, setnews] = useState(0)
	// const [count, setcount] = useState(0)

	// const newUserArr = [1, 2, 3, 4]

	// dispatch({ type: 'createUser', payload: newUserArr })
	// dispatch({ type: 'getNews', payload: {} })
	// dispatch({ type: 'createNewObj', payload: {} })

	const handleClickPlus = () => {
		dispatch({ type: 'plus', payload: 1 })
	}

	const handleClickMinus = () => {
		dispatch({ type: 'minus', payload: 1 })
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
		// console.log('render Btn :>> ')
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

// class Counter extends Component {
// 	state = {
// 		total: 0,
// 	}

// 	handleClickPlus = () => {
// 		this.setState((prevState) => ({ total: prevState.total + 1 }))
// 	}

// 	handleClickMinus = () => {
// 		this.setState((prevState) => ({ total: prevState.total - 1 }))
// 	}

// 	handleClickBtn = () => {
// 		const { name, count } = this.props
// 		console.log('name :>> ', name)
// 		const age = count ?? 10
// 		console.log('age :>> ', age)
// 	}

// 	render() {
// 		// console.log('render')
// 		return (
// 			<div className='card bg-dark text-white mx-auto w-100 mt-2'>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						{this.state.total}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<Button
// 							obj={{ name: 'asd' }}
// 							handleClickPlus={this.handleClickPlus}
// 						/>
// 						<button
// 							className='btn  btn-outline-danger ms-5'
// 							onClick={this.handleClickMinus}
// 						>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Counter
