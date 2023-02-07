import React from 'react'

const FilterUsers = ({ setSearchParams, filterParams }) => {
	const handleChange = ({ target: { value } }) => {
		setSearchParams({ filter: value })
	}
	return (
		<input
			className='form-control mt-2 '
			type='search'
			placeholder='Filter user'
			value={filterParams}
			onChange={handleChange}
		/>
	)
}

export default FilterUsers
