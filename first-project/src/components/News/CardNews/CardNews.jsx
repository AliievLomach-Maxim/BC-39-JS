import React from 'react'
import { Link } from 'react-router-dom'

const CardNews = ({ news }) => {
	return (
		<>
			<h2>Total results: {news.totalResults}</h2>
			{news.articles.map((el) => (
				<Link
					key={el.url}
					className='card my-2 p-2'
					to={`${el.author}`}
				>
					<p>{el.title}</p>
				</Link>
			))}
		</>
	)
}

export default CardNews
