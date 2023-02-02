import { initialStateCounter } from './initialStateCounter'

import { PLUS, STEP, MINUS } from './typesCounter'

export const counterReducer = (
	state = initialStateCounter,
	{ type, payload }
) => {
	switch (type) {
		case PLUS:
			return { ...state, total: state.total + state.step }
		// return { ...state, total: state.total + payload }
		// return { ...state, total: state.total + 1 }

		case MINUS:
			return { ...state, total: state.total - state.step }

		case STEP:
			return { ...state, step: payload }

		default:
			return state
	}
}

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
