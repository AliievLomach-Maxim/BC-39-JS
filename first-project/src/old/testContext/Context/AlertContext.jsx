import React, { useContext, useState } from 'react'

const Context = React.createContext()

export const useAlertContext = () => {
	return useContext(Context)
}

const AlertContext = ({ children }) => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle((prev) => !prev)
	}
	return (
		<Context.Provider value={{ toggle: toggle, toggleAlert: handleToggle }}>
			{children}
		</Context.Provider>
	)
}

export default AlertContext
