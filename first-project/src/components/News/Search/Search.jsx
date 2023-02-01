import { useState } from 'react'
import toast from 'react-hot-toast'

const Search = ({ onSearch }) => {
	const [value, setValue] = useState('')

	const handleChange = ({ target: { value } }) => {
		setValue(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!value.trim()) {
			return toast.error('Pls enter search text!')
		}
		onSearch(value)
		setValue('')
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='d-flex mt-2'
				role='search'
			>
				<input
					className='form-control me-2 '
					type='search'
					placeholder='Search'
					aria-label='Search'
					value={value}
					onChange={handleChange}
				/>
				<button
					className='btn btn-outline-success'
					type='submit'
				>
					Search
				</button>
			</form>
		</>
	)
}

export default Search
