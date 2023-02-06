const BASE_URL = 'https://newsapi.org/'
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export async function getNews(textSearch) {
	const res = await fetch(`${BASE_URL}/v2/everything?q=${textSearch}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return res.json()
}

export async function getTopNews() {
	const res = await fetch(`${BASE_URL}/v2/top-headlines?country=us`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return await res.json()
}
