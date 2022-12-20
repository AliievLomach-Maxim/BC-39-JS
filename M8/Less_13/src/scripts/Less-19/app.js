// // ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 9. Заняття 𝟭9. HTTP
// const getUser = (userId) => {
// 	const url = `https://jsonplaceholder.typicode.com/todos/${userId}`
// 	return fetch(url).then((res) => {
// 		return res.json()
// 	})
// }

// getUser(1).then((user) => {
// 	console.log('user', user)
// })

const BASE_URL = 'https://newsapi.org/v2'
const KEY = '7391ec9459644ca0a76cb25df2a23597'
// const url = `${BASE_URL}/top-headlines?country=ua&category=sports&pageSize=10&apiKey=${KEY}`
// const url2 = `https://newsapi.org/v2/top-headlines?apiKey=7391ec9459644ca0a76cb25df2a23597&category=sports&country=pl`

const ul = document.querySelector('.list')
const btn = document.querySelector('.getNews')
const selectCountry = document.querySelector('#country')
const selectCategory = document.querySelector('#category')

let _country,
	_category = ''

selectCategory.addEventListener('change', ({ target }) => {
	_category = target.value
})

selectCountry.addEventListener('change', ({ target }) => {
	_country = target.value
})

const optionCountry = ['ua', 'us', 'pl']
const optionCategory = ['business', 'entertainment', 'general']

const createOption = (arr) =>
	arr.reduce((acc, el) => acc + `<option value=${el}>${el}</option>`, '')

const addToSelect = (elDom, arr) => {
	elDom.insertAdjacentHTML('afterbegin', createOption(arr))
}

const fetchNews = (country, category) => {
	const url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=10&apiKey=${KEY}`
	fetch(url)
		.then((response) => response.json())
		.then((news) => {
			// console.log('news', news)
			addToUl(news)
		})
		.catch((error) => {
			console.error(error)
		})
}

const createLiElement = ({ urlToImage, title, description, url, author }) => `
<li>
${urlToImage ? `<img src=${urlToImage}>` : ''}
<p>${title}</p>
${description ? `<p>${description}</p>` : ''}
${author ? `<p>${author}</p>` : ''}
<a href=${url}>Go to post</a>
</li>
`

const createListNews = (array) =>
	array.reduce((acc, el) => acc + createLiElement(el), '')

const addToUl = ({ articles }) => {
	ul.innerHTML = ''
	ul.insertAdjacentHTML('afterbegin', createListNews(articles))
}

addToSelect(selectCountry, optionCountry)
addToSelect(selectCategory, optionCategory)

btn.addEventListener('click', () => {
	fetchNews(_country, _category)
})
