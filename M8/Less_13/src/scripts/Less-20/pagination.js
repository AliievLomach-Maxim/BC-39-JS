// import { fetchNews } from './fetch'
// import { select } from './select'
// const ul = document.querySelector('.pagination')

// export const createPagination = ({ totalResults }, pageSize) => {
// 	const pages = Math.ceil(totalResults / pageSize)
// 	ul.innerHTML = ''
// 	for (let i = 1; i <= pages; i++) {
// 		const li = document.createElement('li')
// 		li.textContent = i
// 		ul.append(li)
// 		li.addEventListener('click', handleClick)
// 	}
// }

// function handleClick({ target }) {
// 	fetchNews(select()._category, select()._country, target.textContent)
// }
