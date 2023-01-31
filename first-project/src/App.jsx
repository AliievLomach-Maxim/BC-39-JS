import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAlertContext } from './Context/AlertContext'
import NewsDetails from './components/ContentInfo/NewsDetails'
import UserDetails from './components/Users/UserDetails'
import Layout from './Layout/Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'

import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const NewsPage = lazy(() => import('./pages/NewsPage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))

const App = () => {
	const { isAuth } = useAlertContext()
	return (
		<>
			<Toaster
				position='top-right'
				toastOptions={{ duration: 1500 }}
			/>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
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
						element={
							<PrivateRoute>
								<NewsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='news/:author'
						element={
							<PrivateRoute>
								<NewsDetails />
							</PrivateRoute>
						}
					/>
					<Route
						path='users'
						element={
							<PrivateRoute>
								<UsersPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='users/:id'
						element={
							<PrivateRoute>
								<UserDetails />
							</PrivateRoute>
						}
					/>
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
