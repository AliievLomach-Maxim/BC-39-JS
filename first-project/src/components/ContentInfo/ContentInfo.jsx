import { useEffect, useState } from 'react'
import CardNews from '../CardNews/CardNews'
import ErrorCard from '../ErrorCard'
import Loader from '../Loader'
import { getNews } from '../services/getNews'

import React from 'react'

const ContentInfo = ({ value }) => {
	const [news, setNews] = useState(null)
	const [error, setError] = useState('')
	const [status, setStatus] = useState('idle')

	useEffect(() => {
		if (!value) return
		setStatus('pending')
		getNews(value)
			.then((response) => response.json())
			.then((news) => {
				if (news.status === 'ok') {
					setNews(news)
					setStatus('resolved')
				} else {
					return Promise.reject(news)
				}
			})
			.catch((error) => {
				setError(error)
				setStatus('rejected')
			})
	}, [value])

	if (status === 'rejected') {
		return (
			<ErrorCard
				message={error.message}
				title={error.code}
			/>
		)
	}

	if (status === 'pending') {
		return <Loader />
	}

	if (status === 'resolved') {
		return <CardNews news={news} />
	}
}

export default ContentInfo

// class ContentInfo extends Component {
// 	state = {
// 		news: null,
// 		error: '',
// 		status: 'idle',
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps.value !== this.props.value) {
// 			this.setState({ status: 'pending' })
// 			getNews(this.props.value)
// 				.then((response) => response.json())
// 				.then((news) => {
// 					if (news.status === 'ok') this.setState({ news, status: 'resolved' })
// 					else {
// 						return Promise.reject(news)
// 					}
// 				})
// 				.catch((error) => this.setState({ error, status: 'rejected' }))
// 		}
// 	}

// 	render() {
// 		const { news, error, status } = this.state

// 		if (status === 'rejected') {
// 			return (
// 				<ErrorCard
// 					message={error.message}
// 					title={error.code}
// 				/>
// 			)
// 		}

// 		if (status === 'pending') {
// 			return <Loader />
// 		}

// 		if (status === 'resolved') {
// 			return <CardNews news={news} />
// 		}
// 	}
// }

// export default ContentInfo
