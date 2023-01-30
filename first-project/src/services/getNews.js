const BASE_URL = 'https://newsapi.org/'
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export function getNews(textSearch) {
	return fetch(`${BASE_URL}/v2/everything?q=${textSearch}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}
