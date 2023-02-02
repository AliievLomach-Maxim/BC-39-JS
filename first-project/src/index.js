import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { store } from './store/store'

import CustomContext from './Context/CustomContext'

import App from './components/App'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<CustomContext>
					<App />
				</CustomContext>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
