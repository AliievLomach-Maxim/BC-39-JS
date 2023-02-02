import { NEW_POST } from './typesPosts'

import { initialStatePosts } from './initialStatePosts'

export const postsReducer = (
	state = initialStatePosts.posts,
	{ type, payload }
) => {
	switch (type) {
		case NEW_POST:
			return [...state.posts, { ...payload, id: state.posts.length + 1 }]

		default:
			return state
	}
}
