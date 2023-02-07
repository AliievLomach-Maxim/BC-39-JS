import { createSlice, nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
import { initialState } from '../initialState'

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		createUser: {
			reducer(state, action) {
				state.usersList.push(action.payload)
				toast.success('Create new user successfully')
			},
			prepare(value) {
				return {
					payload: {
						...value,
						id: nanoid(),
						lang: 'Ukr',
					},
				}
			},
		},
		deleteUser: (state, action) => {
			state.filteredUsers = state.filteredUsers.filter(
				(user) => user.id !== action.payload
			)
			toast.success('Dell user successfully')
		},
		filterTextAction: (state, action) => {
			state.filterText = action.payload
		},
	},
})

export const usersReducer = usersSlice.reducer
export const { createUser, deleteUser, filterTextAction } = usersSlice.actions
