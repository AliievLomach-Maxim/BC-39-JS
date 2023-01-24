import React from 'react'

const CardNews = ({ news }) => {
	return (
		<>
			<h2>Total results: {news.totalResults}</h2>
			{news.articles.map((el) => (
				<p key={el.url}>{el.title}</p>
			))}
		</>
	)
}

export default CardNews
