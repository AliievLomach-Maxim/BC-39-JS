import { Component } from 'react'
import CardNews from '../CardNews/CardNews'
import ErrorCard from '../ErrorCard'
import Loader from '../Loader'
import { getNews } from '../services/getNews'

class ContentInfo extends Component {
	state = {
		news: null,
		error: '',
		status: 'idle',
	}

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
	}
}

export default ContentInfo
