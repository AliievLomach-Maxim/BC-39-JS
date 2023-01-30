import React, { useState } from 'react'
import ContentInfo from '../components/ContentInfo'
import Search from '../components/Search'

const NewsPage = () => {
	const [searchText, setSearchText] = useState('')
	return (
		<>
			<Search onSearch={setSearchText} />
			<ContentInfo value={searchText} />
		</>
	)
}

export default NewsPage
