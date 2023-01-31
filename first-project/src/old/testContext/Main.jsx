import React from 'react'
import { useAlertContext } from './Context/AlertContext'

const Main = () => {
	const context = useAlertContext()
	return (
		<div>
			<h1>Hello Context</h1>
			<button
				onClick={context.toggleAlert}
				className='btn btn-success'
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main
