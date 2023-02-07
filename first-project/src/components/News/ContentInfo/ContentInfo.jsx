import CardNews from '../CardNews/CardNews'

import ErrorCard from '../ErrorCard'
import Loader from '../../UI Component/Loader/Loader'

import {
	// useDellNewsMutation,
	useGetTotalNewsQuery,
} from '../../../store/news/usersApi'

const ContentInfo = ({ value }) => {
	const getNews = useGetTotalNewsQuery()
	// const [dellNewsAction, deleteNews] = useDellNewsMutation()

	if (getNews.isError) {
		return (
			<ErrorCard
				message={getNews.error.message}
				title={getNews.error.code}
			/>
		)
	}
	if (getNews.isLoading) {
		return <Loader />
	}

	return <CardNews news={getNews.data} />
}

export default ContentInfo
