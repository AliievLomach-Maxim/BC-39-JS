import { combineReducers } from 'redux'

import { counterReducer } from './counterWithSlice/slice'
// import { newsReducer } from './news/slices/newsSlice'
import { newsApi } from './news/usersApi'
import { postsReducer } from './postsWithSlice/slice'
import { usersReducer } from './users/slices/usersSlice'

export const rootReducer = combineReducers({
	counter: counterReducer,
	posts: postsReducer, //persist([])->persist({})
	// news: newsReducer,
	users: usersReducer,
	[newsApi.reducerPath]: newsApi.reducer,
})
