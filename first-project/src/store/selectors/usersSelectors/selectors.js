import { createSelector } from '@reduxjs/toolkit'

export const selectorUsersList = (state) => state.users.usersList

export const selectorUsersFilter = (state) => state.users.filterText

// export const usersFilteredListSelector = (state) => {
// 	const usersList = selectorUsersList(state)
// 	const filterText = selectorUsersFilter(state)

// 	return usersList.filter((user) => {
// 		console.log('filter!!!!!!!!!')
// 		return user.firstName.toLowerCase().includes(filterText.toLowerCase())
// 	})
// }

export const usersFilteredListSelector = createSelector(
	selectorUsersList,
	selectorUsersFilter,
	(usersList, filter) => {
		return usersList.filter((user) => {
			console.log('filter')
			return user.firstName.toLowerCase().includes(filter.toLowerCase())
		})
	}
)
