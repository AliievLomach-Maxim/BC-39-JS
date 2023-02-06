import { useEffect, useState } from 'react'
import CardNews from '../CardNews/CardNews'
// import { useCustomContext } from '../../../Context/CustomContext'

import ErrorCard from '../ErrorCard'
import Loader from '../../UI Component/Loader/Loader'

// import { getNews } from '../../../services/getNews'
import { useDispatch, useSelector } from 'react-redux'
import {
	getNewsThunk,
	getSearchNewsThunk,
} from '../../../store/news/thunks/newsThunks'

const ContentInfo = ({ value }) => {
	const { news, status, error } = useSelector((state) => state.news)
	// const news = useSelector((state) => state.news.news)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getNewsThunk())
	}, [dispatch])

	// const { news, setNews } = useCustomContext()

	// const [error, setError] = useState('')
	// const [status, setStatus] = useState('idle')

	// useEffect(() => {
	// 	if (!news) return
	// 	setStatus('resolved')
	// }, [news])

	// useEffect(() => {
	// 	if (!value) return
	// 	setStatus('pending')
	// 	getNews(value)
	// 		.then((response) => response.json())
	// 		.then((news) => {
	// 			if (news.status === 'ok') {
	// 				setNews(news)
	// 				setStatus('resolved')
	// 			} else {
	// 				return Promise.reject(news)
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			setError(error)
	// 			setStatus('rejected')
	// 		})
	// }, [setNews, value])

	useEffect(() => {
		if (!value) return
		dispatch(getSearchNewsThunk(value))
	}, [dispatch, value])

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
