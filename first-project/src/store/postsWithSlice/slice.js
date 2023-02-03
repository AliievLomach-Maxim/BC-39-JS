import { createSlice, nanoid } from '@reduxjs/toolkit'
import { initialStatePosts } from './initialStatePosts'

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialStatePosts,
	reducers: {
		createPostAction: {
			reducer(state, action) {
				state.posts = [action.payload, ...state.posts]
			},
			prepare(value) {
				return {
					payload: {
						...value,
						id: nanoid(),
						favorite: false,
					},
				}
			},
		},
		toggleFavoritePost(state, action) {
			state.posts = state.posts.map((post) =>
				post.id === action.payload
					? { ...post, favorite: !post.favorite }
					: post
			)
		},
		deletePost(state, action) {
			state.posts = state.posts.filter((post) => post.id !== action.payload)
		},
	},
})

export const { createPostAction, deletePost, toggleFavoritePost } =
	postsSlice.actions

export const postsReducer = postsSlice.reducer
