import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout = () => {
	return (
		<div className='container'>
			<Toaster
				position='top-right'
				toastOptions={{ duration: 1500 }}
			/>
			<Header />
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout
