import { Component } from 'react'
import CardNews from '../CardNews/CardNews'
import ErrorCard from '../ErrorCard'
import Loader from '../Loader'
import { getNews } from '../services/getNews'

class ContentInfo extends Component {
	state = {
		news: null,
		// loading: false,
		error: '',
		status: 'idle',
	}
	// status['idle','pending','rejected','resolved']

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value) {
			this.setState({ status: 'pending' })
			getNews(this.props.value)
				.then((response) => response.json())
				.then((news) => {
					if (news.status === 'ok') this.setState({ news, status: 'resolved' })
					else {
						return Promise.reject(news)
					}
				})
				.catch((error) => this.setState({ error, status: 'rejected' }))
			// .finally(() => {
			// 	this.setState({ loading: false })
			// })
		}
	}

	render() {
		const { news, error, status } = this.state
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
		// return (
		// 	<>
		// 		{error && <h1>{error}</h1>}
		// 		{loading && (
		// 			<div className='text-center mt-3'>
		// 				<div
		// 					className='spinner-border text-success'
		// 					role='status'
		// 				>
		// 					<span className='visually-hidden'>Loading...</span>
		// 				</div>
		// 			</div>
		// 		)}
		// 		{/* {news && news.articles && news.articles.source}
		// 		{news?.articles?.source} */}
		// 		{news && (
		// 			<>
		// 				<h2>Total results: {news.totalResults}</h2>
		// 				{news.articles.map((el) => (
		// 					<p key={el.url}>{el.title}</p>
		// 				))}
		// 			</>
		// 		)}
		// 	</>
		// )
	}
}

export default ContentInfo
