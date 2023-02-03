import { initialStateCounter } from './initialStateCounter'

import { createReducer } from '@reduxjs/toolkit'

import { minusAction, plusAction, stepAction } from './actionsCounter'

export const counterReducer = createReducer(initialStateCounter, {
	[plusAction]: (state) => ({ ...state, total: state.total + state.step }),
	[minusAction]: (state) => ({ ...state, total: state.total - state.step }),
	[stepAction]: (state, action) => ({ ...state, step: action.payload }),
})
