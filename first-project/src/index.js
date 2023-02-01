import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import CustomContext from './Context/CustomContext'

import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<CustomContext>
				<App />
			</CustomContext>
		</BrowserRouter>
	</React.StrictMode>
)
