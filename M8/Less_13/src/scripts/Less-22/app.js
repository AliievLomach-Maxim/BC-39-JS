import { addPost } from './app2'
const url = 'https://jsonplaceholder.typicode.com/posts'
const ref = {
	btn: document.querySelector('.getBtn'),

	form: document.querySelector('form'),
	inputBody: document.querySelector('.body'),
	inputTitle: document.querySelector('.title'),

	formUpdate: document.querySelector('.formUpdate'),
	inputBodyUpdate: document.querySelector('.bodyUpdate'),
	inputTitleUpdate: document.querySelector('.titleUpdate'),

	formDell: document.querySelector('.formDell'),
	inputIdDell: document.querySelector('.idDell'),
}

// const getPosts = () => {
// 	fetch(url)
// 		.then((response) => response.json())
// 		// .then(console.log)
// 		.then((posts) => {
// 			console.log('posts', posts)
// 		})
// 		.catch((error) => {
// 			console.log('error', error)
// 		})
// }

// const getPosts = async () => {
// 	// const result = 10+20
// 	// const _pow = result**2
// 	// console.log('_pow', _pow)

// 	const response = await fetch(url)
// 	const posts = await response.json()
// 	console.log('posts', posts)

// 	// fetch(url)
// 	// 	.then((response) => response.json())
// 	// 	// .then(console.log)
// 	// 	.then((posts) => {
// 	// 		console.log('posts', posts)
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		console.log('error', error)
// 	// 	})
// }
// async function foo(){}
// const foo = async function(){}

const str = 'Alex'
const str2 = str.toLowerCase()

const getPosts = async () => {
	try {
		const response = await fetch(url)
		const posts = await response.json()

		// const arr = posts.filter((el) => el.id === 1)

		const getNewPosts = addPost(posts)
		const resultArr = getNewPosts('!!!!!!!')

		console.log('resultArr', resultArr)
		return posts
	} catch (error) {
		console.log('error', error)
	} finally {
		console.log('GET')
	}
}

// const createPost = (e) => {
// 	e.preventDefault()
// 	fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			body: ref.inputBody.value,
// 			title: ref.inputTitle.value,
// 			userId: 8,
// 		}),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((response) => response.json())
// 		// .then(console.log)
// 		.then((posts) => {
// 			console.log('response>>>', posts)
// 		})
// 		.catch((error) => {
// 			console.log('error', error)
// 		})
// }

const createPost = async (e) => {
	e.preventDefault()
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				body: ref.inputBody.value,
				title: ref.inputTitle.value,
				userId: 8,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const result = await response.json()
		console.log('result', result)
	} catch (error) {
		console.log('error', error)
	}
}

const updatePost = (e) => {
	e.preventDefault()
	fetch(`${url}/1`, {
		method: 'PATCH',
		body: JSON.stringify({
			body: ref.inputBodyUpdate.value,
			title: ref.inputTitleUpdate.value,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		// .then(console.log)
		.then((posts) => {
			console.log('response>>>', posts)
		})
		.catch((error) => {
			console.log('error', error)
		})
}

const dellPost = (e) => {
	e.preventDefault()
	fetch(`${url}/${ref.inputIdDell.value}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())
		// .then(console.log)
		.then((posts) => {
			console.log('response>>>', posts)
		})
		.catch((error) => {
			console.log('error', error)
		})
}

ref.btn.addEventListener('click', getPosts)
ref.form.addEventListener('submit', createPost)
ref.formUpdate.addEventListener('submit', updatePost)
ref.formDell.addEventListener('submit', dellPost)

// const foo = async () => {
// 	const response = await Promise.reject('Rej')
// 	return response + ' OK'
// }

// // console.log('foo()', foo())
// foo()
// 	.then((res) => {
// 		console.log('res', res)
// 	})
// 	.catch((err) => {
// 		console.log('err', err)
// 	})

export function parent(number) {
	number += 100
	return function (number2) {
		return number + number2
	}
}
