import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	getProfile,
	loginUser,
} from '../../services/auth-services/auth-service'

export const authThunk = createAsyncThunk('auth/login', (payload) => {
	return loginUser(payload)
})

export const profileThunk = createAsyncThunk('auth/profile',  () => {
	return getProfile()
})
