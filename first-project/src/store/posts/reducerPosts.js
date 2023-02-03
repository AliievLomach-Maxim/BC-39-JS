import { initialStatePosts } from './initialStatePosts'
import { createReducer } from '@reduxjs/toolkit'
import {
	createPostAction,
	deletePost,
	toggleFavoritePost,
} from './actionsPosts'

export const postsReducer = createReducer(initialStatePosts.posts, {
	[createPostAction]: (state, action) => [action.payload, ...state],
	[deletePost]: (state, action) =>
		state.filter((post) => post.id !== action.payload),
	[toggleFavoritePost]: (state, action) => {
		return state.map((post) =>
			post.id === action.payload ? { ...post, favorite: !post.favorite } : post
		)
	},
})
