import React, { useState } from 'react'

import Search from '../components/News/Search/Search'
import ContentInfo from '../components/News/ContentInfo/ContentInfo'

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
