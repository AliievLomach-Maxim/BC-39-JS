import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducerCounter'
import { postsReducer } from './posts/reducerPosts'

export const reducer = combineReducers({
	counter: counterReducer,
	posts: postsReducer,
})

// export const reducer = (state, { type, payload }) => {
// 	switch (type) {
// 		case 'plus':
// 			return { ...state, total: state.total + state.step }
// 		// return { ...state, total: state.total + payload }
// 		// return { ...state, total: state.total + 1 }

// 		case 'minus':
// 			return { ...state, total: state.total - state.step }

// 		case 'step':
// 			return { ...state, step: payload }

// 		case 'newPost':
// 			return {
// 				...state,
// 				posts: [...state.posts, { ...payload, id: state.posts.length + 1 }],
// 			}
// 		default:
// 			return state
// 	}
// }
