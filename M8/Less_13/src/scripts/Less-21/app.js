import fetchAPI from './fetching'
// const btn = document.querySelector('.getBtn')
// const url = 'https://jsonplaceholder.typicode.com/posts'

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

// const updatePost = (e) => {
// 	e.preventDefault()
// 	fetch(`${url}/1`, {
// 		method: 'PATCH',
// 		body: JSON.stringify({
// 			body: ref.inputBodyUpdate.value,
// 			// title: ref.inputTitleUpdate.value,
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

// const dellPost = (e) => {
// 	e.preventDefault()
// 	fetch(`${url}/${ref.inputIdDell.value}`, {
// 		method: 'DELETE',
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

// ref.form.addEventListener('submit', getPosts)
// ref.form.addEventListener('submit', createPost)
// ref.formUpdate.addEventListener('submit', updatePost)
// ref.formDell.addEventListener('submit', dellPost)

ref.btn.addEventListener('click', () => fetchAPI({ method: 'GET' }))

ref.form.addEventListener('submit', (e) => {
	e.preventDefault()
	fetchAPI({
		method: 'POST',
		data: { body: ref.inputBody.value, title: ref.inputTitle.value, userId: 8 },
	})
})

ref.formUpdate.addEventListener('submit', (e) => {
	e.preventDefault()
	fetchAPI({
		method: 'PUT',
		id: 2,
		data: {
			body: ref.inputBodyUpdate.value,
			title: ref.inputTitleUpdate.value,
			userId: 8,
		},
	})
})

ref.formDell.addEventListener('submit', (e) => {
	e.preventDefault()
	fetchAPI({
		method: 'DELETE',
		id: ref.inputIdDell.value,
	})
})
