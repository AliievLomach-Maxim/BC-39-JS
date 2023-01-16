import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// const div = document.createElement('div')
// const paragraph = document.createElement('p')
// paragraph.textContent = 'I am p'
// paragraph.id = 'test-ID'
// paragraph.classList = 'testClass'
// div.append(paragraph)

// const paragraph = React.createElement('p', {
// 	id: 'test-ID',
// 	className: 'testClass',
// 	children: 'I am P',
// })

// const div = React.createElement('div', {
// 	children: paragraph,
// })

// const paragraph = (
// 	<p
// 		id='test-ID'
// 		className='testClass'
// 	>
// 		I am P
// 	</p>
// )

// const div = <div>{paragraph}</div>
// const arrElem = data.map((el) => {
// 	return (
// 		<div
// 			key={el.id}
// 			className='card mx-auto my-2'
// 			style={{ width: '18rem' }}
// 		>
// 			<img
// 				src={el.url}
// 				className='card-img-top'
// 				alt={el.title}
// 			/>
// 			<div className='card-body'>
// 				<h5 className='card-title'>{el.title}</h5>
// // 				<p className='card-text'>
// // 					Some quick example text to build on the card title and make up the
// // 					bulk of the card's content.
// // 				</p>
// // 				<a
// 					href='http'
// 					className='btn btn-primary'
// 				>
// 					Go somewhere
// 				</a>
// 			</div>
// 		</div>
// 	)
// })
// function Component() {
// 	return <p className='card-text'>Component</p>
// }

// const Component = function () {
// 	return <p className='card-text'>Component</p>
// }

// function comp(obj) {
//   console.log(obj.class)
// }

// function createArrEl({name,class,email}) {
//   console.log(name)
//   comp(class)
// }

// createArrEl({
// 	class: 'asdasd',
// 	name: 'Alex',
// 	email: 'asd@asd.co',
// })

// function fn(obj) {
// 	// if (true) {
// 	// 	console.log('a :>> ', obj.a)
// 	// }
// 	// true && console.log('a :>> ', obj.a)
// 	// let number = 0
// 	// if (true) {
// 	// return	number = 10
// 	// } else {
// 	// return	number = 100
// 	// }
// 	return 0 || 10
// }
// const age = 10
// fn({ a: age })

// const root = document.getElementById('#root')
// root.append(div)

// ReactDOM.render(div, root)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)
