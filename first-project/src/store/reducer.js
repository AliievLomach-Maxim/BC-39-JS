import { combineReducers } from 'redux'
// import { counterReducer } from './counter/reducerCounter'
// import { postsReducer } from './posts/reducerPosts'

import { counterReducer } from './counterWithSlice/slice'
import { postsReducer } from './postsWithSlice/slice'

export const reducer = combineReducers({
	counter: counterReducer,
	posts: postsReducer, //persist([])->persist({})
})
