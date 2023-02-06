import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '../initialState'
import { getNewsThunk, getSearchNewsThunk } from '../thunks/newsThunks'

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	// reducers: {
	// 	fetching: (state) => {
	// 		state.status = 'pending'
	// 	},
	// 	fetchingSuccess: (state, action) => {
	// 		state.status = 'resolved'
	// 		state.news = action.payload
	// 		state.error = ''
	// 	},
	// 	fetchingError: (state, action) => {
	// 		state.status = 'rejected'
	// 		state.error = action.payload
	// 	},
	// },
	extraReducers: {
		[getNewsThunk.pending]: (state) => {
			state.status = 'pending'
		},
		[getNewsThunk.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.news = action.payload
			state.error = ''
		},
		[getNewsThunk.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		[getSearchNewsThunk.pending]: (state) => {
			state.status = 'pending'
		},
		[getSearchNewsThunk.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.news = action.payload
			state.error = ''
		},
		[getSearchNewsThunk.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
	},
})

export const newsReducer = newsSlice.reducer
// export const { fetching, fetchingError, fetchingSuccess } = newsSlice.actions
