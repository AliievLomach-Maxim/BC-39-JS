import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsDetails from '../components/ContentInfo/NewsDetails'
import UserDetails from '../components/Users/UserDetails'
import Layout from '../Layout/Layout'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import UsersPage from '../pages/UsersPage'

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='news'
						element={<NewsPage />}
					/>
					<Route
						path='news/:author'
						element={<NewsDetails />}
					/>
					<Route
						path='users'
						element={<UsersPage />}
					>
						<Route
							path='user/:id'
							element={<UserDetails />}
						/>
						<Route
							path='user/:author'
							element={<NewsDetails />}
						/>
					</Route>
				</Route>
				<Route
					path='*'
					element={<ErrorPage />}
				/>
			</Routes>
		</>
	)
}

export default App
