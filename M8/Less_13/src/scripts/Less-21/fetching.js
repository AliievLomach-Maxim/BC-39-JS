export default function fetchAPI({ method, id, data }) {
	const URL = id
		? `https://jsonplaceholder.typicode.com/posts/${id}`
		: 'https://jsonplaceholder.typicode.com/posts'

	if (method === 'DELETE' || method === 'GET') {
		fetch(URL, {
			method,
		})
			.then((response) => response.json())
			.then((posts) => {
				console.log('posts', posts)
			})
			.catch((error) => {
				console.log('error', error)
			})
	} else
		fetch(URL, {
			method,
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			// .then(console.log)
			.then((posts) => {
				console.log('posts', posts)
			})
			.catch((error) => {
				console.log('error', error)
			})
}
