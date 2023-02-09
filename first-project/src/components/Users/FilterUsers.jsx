import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTextAction } from '../../store/users/slices/usersSlice'

const FilterUsers = () => {
	const dispatch = useDispatch()
	
	const handleChange = ({ target: { value } }) => {
		dispatch(filterTextAction(value))
	}
	return (
		<input
			className='form-control mt-2 '
			type='search'
			placeholder='Filter user'
			onChange={handleChange}
		/>
	)
}

export default FilterUsers
