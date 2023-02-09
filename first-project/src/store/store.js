import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { newsApi } from './news/usersApi'

import { rootReducer } from './reducer'

// const persistConfig = {
// 	key: 'main',
// 	storage,
// 	blacklist: ['counter'],
// }

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				action(store.dispatch)
// 				return
// 			}
// 			console.log(action)
// 			return next(action)
// 		}
// 	}
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: rootReducer,
	// middleware: [customMiddleware],
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(newsApi.middleware),
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(newsApi.middleware),
})

export const persistor = persistStore(store)
