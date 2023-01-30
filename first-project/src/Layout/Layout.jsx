import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import LoginForm from '../components/LoginForm'
import Modal from '../components/Modal'

const Layout = () => {
	const [visibleLogin, setVisibleLogin] = useState(false)
	console.log('visibleLogin :>> ', visibleLogin)
	const toggleModalLogin = () => {
		setVisibleLogin((prevState) => !prevState)
	}
	const sendData = (data) => {
		console.log(data)
	}
	return (
		<div className='container'>
			<Toaster
				position='top-right'
				toastOptions={{ duration: 1500 }}
			/>
			<Header />
			<Outlet />
			{visibleLogin && (
				<Modal
					onClose={toggleModalLogin}
					type='Login'
				>
					<LoginForm send={sendData} />
				</Modal>
			)}
		</div>
	)
}

export default Layout
