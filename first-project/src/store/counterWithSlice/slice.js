import { createSlice } from '@reduxjs/toolkit'
import { initialStateCounter } from './initialStateCounter'

const counterSlice = createSlice({
	name: 'posts',
	initialState: initialStateCounter,
	reducers: {
		plusAction(state) {
			state.total = state.total + state.step
		},
		minusAction(state) {
			state.total = state.total - state.step
		},
		stepAction(state, action) {
			state.step = action.payload
		},
	},
})

export const { plusAction, minusAction, stepAction } = counterSlice.actions

export const counterReducer = counterSlice.reducer
