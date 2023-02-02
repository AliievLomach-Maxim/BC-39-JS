import React from 'react'

const CreatePost = ({ create }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		create({
			title: e.target.elements.title.value,
			body: e.target.elements.body.value,
		})
		e.target.reset()
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
					type='text'
					placeholder='Title'
					name='title'
				/>
				<input
					className='form-control me-2 '
					type='text'
					placeholder='Body'
					name='body'
				/>
				<button
					className='btn btn-outline-success'
					type='submit'
				>
					Create Post
				</button>
			</form>
		</>
	)
}

export default CreatePost
