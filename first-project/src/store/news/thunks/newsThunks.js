import { getTopNews, getNews } from '../../../services/API'
// import { fetching, fetchingError, fetchingSuccess } from '../slices/newsSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const getNewsThunk = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(fetching())
// 			const data = await getTopNews()
// 			dispatch(fetchingSuccess(data))
// 		} catch (error) {
// 			dispatch(fetchingError(error))
// 		}
// 	}
// }

// export const getNewsThunk = createAsyncThunk('news/getNews',async () =>await getTopNews())
export const getNewsThunk = createAsyncThunk('news/getNews', () => getTopNews())

// export const dellNewsThunk = createAsyncThunk('news/getNews', () => {})
// export const createNewsThunk = createAsyncThunk('news/getNews', () => {})

// export const getSearchNewsThunk = (value) => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(fetching())
// 			const data = await getNews(value)
// 			dispatch(fetchingSuccess(data))
// 		} catch (error) {
// 			dispatch(fetchingError(error))
// 		}
// 	}
// }
export const getSearchNewsThunk = createAsyncThunk(
	'news/getSearch',
	(value, thunkAPI) => {
		try {
			// thunkAPI.dispatch(fetching())
			// thunkAPI.fulfillWithValue(getNews(value))
			return getNews(value)
		} catch (error) {
			thunkAPI.rejectWithValue('Error')
		}
	}
)
