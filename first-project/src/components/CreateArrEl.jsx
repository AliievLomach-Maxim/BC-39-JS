// import css from './CreateArrEl.module.css'
// import './CreateArrEl.css'
// import classNames from 'classnames'

// export default function CreateArrEl({ data, isOnline, isOffline }) {
// 	console.log('css.header', css.header)
// 	const classes = ['header']
// 	if (isOnline) classes.push('red')
// 	return data.map((el) => {
// 		return (
// 			<div
// 				// className={isOnline ? 'header red' : 'header'}
// 				// className={classNames('header', { red: isOnline, black: isOffline })}
// 				// className={isOnline ? css.header : `${css.header} ${css.red}`}
// 				// className={classNames(css.header, { [`${css.red}`]: isOnline })}
// 				// className={classes.join(' ')}
// 				id='test-Id'
// 				key={el.id}
// 			>
// 				<img
// 					src={el.url}
// 					alt={el.title}
// 				/>
// 				<div>
// 					<h5>{el.title}</h5>
// 					<a href='http'>Go somewhere</a>
// 				</div>
// 			</div>
// 		)
// 	})
// }
// ==================
// css in JS

// import styled from 'styled-components'

// const Container = styled.div`
// 	width: 300px;
// 	background-color: ${(props) => (props.isOnline ? 'red' : 'black')};
// `
// const Img = styled.img`
// 	width: 300px;
// `

// export default function CreateArrEl({ data, isOnline, isOffline }) {
// 	return data.map((el) => {
// 		return (
// 			<Container
// 				id='test-Id'
// 				key={el.id}
// 				isOnline={isOnline}
// 			>
// 				<Img
// 					src={el.url}
// 					alt={el.title}
// 				/>
// 				<div>
// 					<h5>{el.title}</h5>
// 					<a href='http'>Go somewhere</a>
// 				</div>
// 			</Container>
// 		)
// 	})
// }
// ==================
// bootstrap

// export default function CreateArrEl({ data, isOnline, isOffline }) {
// 	// return data.map((el) => {
// 	// 	return (
// 	// 		// <div
// 	// 		// 	id='test-Id'
// 	// 		// 	key={el.id}
// 	// 		// 	isOnline={isOnline}
// 	// 		// >
// 	// 		// 	<img
// 	// 		// 		src={el.url}
// 	// 		// 		alt={el.title}
// 	// 		// 	/>
// 	// 		// 	<div>
// 	// 		// 		<h5>{el.title}</h5>
// 	// 		// 		<a href='http'>Go somewhere</a>
// 	// 		// 	</div>
// 	// 		// </div>

// 	// 		// <div
// 	// 		// 	className='card'
// 	// 		// 	style={{ width: '18rem' }}
// 	// 		// 	key={el.id}
// 	// 		// 	isOnline={isOnline}
// 	// 		// >
// 	// 		// 	<img
// 	// 		// 		src={el.url}
// 	// 		// 		alt={el.title}
// 	// 		// 		className='card-img-top'
// 	// 		// 	/>
// 	// 		// 	<div className='card-body'>
// 	// 		// 		<h5 className='card-title'>{el.title}</h5>
// 	// 		// 		<p className='card-text'>
// 	// 		// 			Some quick example text to build on the card title and make up the
// 	// 		// 			bulk of the card's content.
// 	// 		// 		</p>
// 	// 		// 		<a
// 	// 		// 			href='asd'
// 	// 		// 			className='btn btn-primary'
// 	// 		// 		>
// 	// 		// 			Go somewhere
// 	// 		// 		</a>
// 	// 		// 	</div>
// 	// 		// </div>
// 	// 	)
// 	// })
// 	return (
// 		// <form className='row g-3 mx-5 my-3'>
// 		// 	<div className='col-md-4'>
// 		// 		<label
// 		// 			for='validationDefault01'
// 		// 			className='form-label'
// 		// 		>
// 		// 			First name
// 		// 		</label>
// 		// 		<input
// 		// 			type='text'
// 		// 			className='form-control'
// 		// 			id='validationDefault01'
// 		// 			value='Mark'
// 		// 			required
// 		// 		/>
// 		// 	</div>
// 		// 	<div className='col-md-4'>
// 		// 		<label
// 		// 			for='validationDefault02'
// 		// 			className='form-label'
// 		// 		>
// 		// 			Last name
// 		// 		</label>
// 		// 		<input
// 		// 			type='text'
// 		// 			className='form-control'
// 		// 			id='validationDefault02'
// 		// 			value='Otto'
// 		// 			required
// 		// 		/>
// 		// 	</div>
// 		// 	<div className='col-md-4'>
// 		// 		<label
// 		// 			for='validationDefaultUsername'
// 		// 			className='form-label'
// 		// 		>
// 		// 			Username
// 		// 		</label>
// 		// 		<div className='input-group'>
// 		// 			<span
// 		// 				className='input-group-text'
// 		// 				id='inputGroupPrepend2'
// 		// 			>
// 		// 				@
// 		// 			</span>
// 		// 			<input
// 		// 				type='text'
// 		// 				className='form-control'
// 		// 				id='validationDefaultUsername'
// 		// 				aria-describedby='inputGroupPrepend2'
// 		// 				required
// 		// 			/>
// 		// 		</div>
// 		// 	</div>
// 		// 	<div className='col-md-6'>
// 		// 		<label
// 		// 			for='validationDefault03'
// 		// 			className='form-label'
// 		// 		>
// 		// 			City
// 		// 		</label>
// 		// 		<input
// 		// 			type='text'
// 		// 			className='form-control'
// 		// 			id='validationDefault03'
// 		// 			required
// 		// 		/>
// 		// 	</div>
// 		// 	<div className='col-md-3'>
// 		// 		<label
// 		// 			for='validationDefault04'
// 		// 			className='form-label'
// 		// 		>
// 		// 			State
// 		// 		</label>
// 		// 		<select
// 		// 			className='form-select'
// 		// 			id='validationDefault04'
// 		// 			required
// 		// 		>
// 		// 			<option
// 		// 				selected
// 		// 				disabled
// 		// 				value=''
// 		// 			>
// 		// 				Choose...
// 		// 			</option>
// 		// 			<option>...</option>
// 		// 		</select>
// 		// 	</div>
// 		// 	<div className='col-md-3'>
// 		// 		<label
// 		// 			for='validationDefault05'
// 		// 			className='form-label'
// 		// 		>
// 		// 			Zip
// 		// 		</label>
// 		// 		<input
// 		// 			type='text'
// 		// 			className='form-control'
// 		// 			id='validationDefault05'
// 		// 			required
// 		// 		/>
// 		// 	</div>
// 		// 	<div className='col-12'>
// 		// 		<div className='form-check'>
// 		// 			<input
// 		// 				className='form-check-input'
// 		// 				type='checkbox'
// 		// 				value=''
// 		// 				id='invalidCheck2'
// 		// 				required
// 		// 			/>
// 		// 			<label
// 		// 				className='form-check-label'
// 		// 				for='invalidCheck2'
// 		// 			>
// 		// 				Agree to terms and conditions
// 		// 			</label>
// 		// 		</div>
// 		// 	</div>
// 		// 	<div className='col-12'>
// 		// 		<button
// 		// 			className='btn btn-primary'
// 		// 			type='submit'
// 		// 		>
// 		// 			Submit form
// 		// 		</button>
// 		// 	</div>
// 		// </form>
// 	)
// }
// ==========
// reactIcons

import { AiFillFacebook, AiFillCaretRight, AiOutlineMail } from 'react-icons/ai'

export default function CreateArrEl({ data, isOnline, isOffline }) {
	return (
		<>
			<AiFillFacebook
				size='300px'
				color='#00d0ff'
			/>
			<AiFillCaretRight
				size='300px'
				color='#00d0ff'
			/>
			<AiOutlineMail
				size='300px'
				color='#00d0ff'
			/>
		</>
	)
}
