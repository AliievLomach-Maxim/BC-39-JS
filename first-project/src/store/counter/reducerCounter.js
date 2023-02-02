import { initialStateCounter } from './initialStateCounter'

import { PLUS, STEP, MINUS } from './typesCounter'

export const counterReducer = (
	state = initialStateCounter,
	{ type, payload }
) => {
	switch (type) {
		case PLUS:
			return { ...state, total: state.total + state.step }

		case MINUS:
			return { ...state, total: state.total - state.step }

		case STEP:
			return { ...state, step: payload }

		default:
			return state
	}
}
