import { createAction, nanoid } from '@reduxjs/toolkit'

export const createPostAction = createAction('NEW_POST', (value) => {
	return {
		// payload: {
		// 	title: value.title,
		// 	body: value.body,
		// 	id: Date.now(),
		// 	favorite: false,
		// },
		payload: {
			...value,
			id: nanoid(),
			favorite: false,
		},
	}
})

export const deletePost = createAction('POSTS/DELL_POST')

export const toggleFavoritePost = createAction('POSTS/TOGGLE_FAVORITE_POST')
