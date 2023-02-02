import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducerCounter'
import { postsReducer } from './posts/reducerPosts'

export const reducer = combineReducers({
	counter: counterReducer,
	posts: postsReducer,
})
