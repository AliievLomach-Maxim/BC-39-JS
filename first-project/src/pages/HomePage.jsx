import React from 'react'

import CardTimer from '../components/Home/CardTimer/CardTimer'
import Counter from '../components/Home/Counter/Counter'
import Step from '../components/Home/Counter/Step'
import Posts from '../components/Home/Posts/Posts'

const HomePage = () => {
	return (
		<>
			<CardTimer />
			<Step />
			<Counter />
			<Posts />
		</>
	)
}

export default HomePage
