import { BASE_URL, KEY } from './keys'
import { createPagination } from './pagination'
import { addToUl } from './creteElDom'

const pageSize = 10

export const fetchNews = (country, category, page = 1) => {
	const url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${KEY}`
	fetch(url)
		.then((response) => response.json())
		.then((news) => {
			addToUl(news)
			createPagination(news, pageSize)
		})
		.catch((error) => {
			console.error(error)
		})
}
// -------
// const params = new URLSearchParams({
// 	country: 'pl',
// 	pageSize: 10,
// 	page: 2,
// })

// const url = `${BASE_URL}/top-headlines?${params}`
// fetch(url, {
// 	method: 'get',
// 	headers: {
// 		Authorization: KEY,
// 	},
// })
// 	.then((response) => response.json())
// 	.then((news) => {
// 		if (news.status !== 'error') fn(news)
// 		else console.error(news.message)
// 	})
// 	.catch((error) => {
// 		console.log('error', error)
// 	})

// function fn(news) {
// 	const pages = Math.ceil(news.totalResults / 10)
// 	console.log('pages', pages)
// 	console.log('news', news)
// }
