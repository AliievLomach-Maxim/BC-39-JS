import { fetchNews } from './fetch'
import { select } from './select'

const btn = document.querySelector('.getNews')

btn.addEventListener('click', () => {
	fetchNews(select()._category, select()._country)
})
