import { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import Layout from '../Layout/Layout'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import PublicRoute from './PublicRoute/PublicRoute'
import NewsDetails from './News/ContentInfo/NewsDetails'

import UserDetails from './Users/UserDetails'
import SignInPage from '../pages/SignInPage'

import { useDispatch, useSelector } from 'react-redux'
import { setTokenAuth } from '../api/api'
import { profileThunk } from '../store/auth/thunk'

const NewsPage = lazy(() => import('../pages/NewsPage'))
const UsersPage = lazy(() => import('../pages/UsersPage'))

const App = () => {
	const profile = useSelector((state) => state.auth.profile)
	const isAuth = useSelector((state) => state.auth.access_token)

	const dispatch = useDispatch()
	useEffect(() => {
		isAuth && setTokenAuth(`Bearer ${isAuth}`)
		isAuth && !profile.name && dispatch(profileThunk())
	}, [dispatch, isAuth, profile.name])

	return (
		<>
			<Toaster position='top-right' toastOptions={{ duration: 1500 }} />
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='/signIn'
					element={
						<PublicRoute>
							<SignInPage />
						</PublicRoute>
					}
				/>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
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
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	)
}

export default App
