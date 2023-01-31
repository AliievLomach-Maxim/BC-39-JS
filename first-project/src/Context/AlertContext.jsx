import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Context = React.createContext()

export const useAlertContext = () => {
	return useContext(Context)
}

const AUTH = {
	email: 'asd@asd.co',
	password: '123',
}
const IsAUTH = 'IsAUTH'

const AlertContext = ({ children }) => {
	const [toggle, setToggle] = useState(false)
	const [news, setNews] = useState(null)
	const [isAuth, setIsAuth] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		const local = localStorage.getItem(IsAUTH)
		if (local) {
			setIsAuth(JSON.parse(local))
		}
	}, [])

	const login = ({ email, password }) => {
		if (email === AUTH.email && password === AUTH.password) {
			localStorage.setItem(IsAUTH, 'true')
			setIsAuth(true)
			navigate('/')
		}
	}

	const logout = () => {
		localStorage.setItem(IsAUTH, 'false')
		setIsAuth(false)
	}

	const toggleAlert = () => {
		setToggle((prev) => !prev)
	}
	return (
		<Context.Provider
			value={{
				toggle,
				toggleAlert,
				news,
				setNews,
				isAuth,
				setIsAuth,
				login,
				logout,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default AlertContext
