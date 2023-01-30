import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import App from './testContext/App'
// import App from './App'
import App from './forRoutes/App'
import AlertContext from './forRoutes/Context/AlertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<AlertContext>
			<App />
		</AlertContext>
	</BrowserRouter>
	// </React.StrictMode>
)
