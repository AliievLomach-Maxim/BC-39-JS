import React from 'react'
import { useAlertContext } from './Context/AlertContext'

const Alert = () => {
	const context = useAlertContext()
	if (!context.toggle) return
	return <div className='alert alert-danger'>Messaaaaaggee</div>
}

export default Alert
