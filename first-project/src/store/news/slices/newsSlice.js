import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { initialState } from '../initialState'
import { getNewsThunk, getSearchNewsThunk } from '../thunks/newsThunks'

const extraActions = [getNewsThunk, getSearchNewsThunk]

const createExtraAct = (type) =>
	extraActions.map((extraAction) => extraAction[type])

const handleGetNews = (state, action) => {
	state.news = action.payload
}

const handleGetSearch = (state, action) => {
	state.news = action.payload
}

const handleCreateNews = (state, action) => {
	state.news = action.payload
}

const handleDell = (state, action) => {
	state.news = action.payload
}

const handleFull = (state, action) => {
	state.status = 'resolved'
	state.error = ''
}

const handlePendidng = (state) => {
	state.status = 'pending'
}

const handleRej = (state, action) => {
	state.status = 'rejected'
	state.error = action.payload
}
export const newsSlice = createSlice({
	name: 'news',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getNewsThunk.fulfilled, handleGetNews)
			.addCase(getSearchNewsThunk.fulfilled, handleGetSearch)
			// .addCase(createNewsThunk.fulfilled, handleCreateNews)
			// .addCase(dellNewsThunk.fulfilled, handleDell)
			.addMatcher(isAnyOf(...createExtraAct('fulfilled')), handleFull)
			.addMatcher(isAnyOf(...createExtraAct('pending')), handlePendidng)
			.addMatcher(isAnyOf(...createExtraAct('rejected')), handleRej)
	},

	//  {
	// [getNewsThunk.pending]: (state) => {
	// 	state.status = 'pending'
	// },
	// [getNewsThunk.fulfilled]: (state, action) => {
	// 	state.status = 'resolved'
	// 	state.news = action.payload
	// 	state.error = ''
	// },
	// [getNewsThunk.rejected]: (state, action) => {
	// 	state.status = 'rejected'
	// 	state.error = action.payload
	// },
	// [getSearchNewsThunk.pending]: (state) => {
	// 	state.status = 'pending'
	// },
	// [getSearchNewsThunk.fulfilled]: (state, action) => {
	// 	state.status = 'resolved'
	// 	state.news = action.payload
	// 	state.error = ''
	// },
	// [getSearchNewsThunk.rejected]: (state, action) => {
	// 	state.status = 'rejected'
	// 	state.error = action.payload
	// },
	// [createNewsThunk.pending]: (state) => {
	// 	state.status = 'pending'
	// },
	// [createNewsThunk.fulfilled]: (state, action) => {
	// 	state.status = 'resolved'
	// 	state.news = action.payload
	// 	state.error = ''
	// },
	// [createNewsThunk.rejected]: (state, action) => {
	// 	state.status = 'rejected'
	// 	state.error = action.payload
	// },
	// [dellNewsThunk.pending]: (state) => {
	// 	state.status = 'pending'
	// },
	// [dellNewsThunk.fulfilled]: (state, action) => {
	// 	state.status = 'resolved'
	// 	state.news = action.payload
	// 	state.error = ''
	// },
	// [dellNewsThunk.rejected]: (state, action) => {
	// 	state.status = 'rejected'
	// 	state.error = action.payload
	// },
	// },
})

export const newsReducer = newsSlice.reducer
// export const { fetching, fetchingError, fetchingSuccess } = newsSlice.actions
