import { combineReducers } from 'redux'
// import { counterReducer } from './counter/reducerCounter'
// import { postsReducer } from './posts/reducerPosts'

import { counterReducer } from './counterWithSlice/slice'
import { newsReducer } from './news/slices/newsSlice'
import { postsReducer } from './postsWithSlice/slice'

export const rootReducer = combineReducers({
	counter: counterReducer,
	posts: postsReducer, //persist([])->persist({})
	news: newsReducer,
})
