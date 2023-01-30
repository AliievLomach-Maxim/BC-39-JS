import React from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
	const { author } = useParams()
	return (
		<div className='card'>
			<h1>{author ? author : 'Test'}</h1>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	)
}

export default NewsDetails
