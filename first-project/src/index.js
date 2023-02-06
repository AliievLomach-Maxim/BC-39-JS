import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import { persistor, store } from './store/store'

import CustomContext from './Context/CustomContext'

import App from './components/App'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<CustomContext>
					<App />
				</CustomContext>
			</PersistGate>
		</Provider>
	</BrowserRouter>
	// </React.StrictMode>
)
