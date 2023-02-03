import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import CreatePost from './CreatePost'

import {
	createPostAction,
	deletePost,
	toggleFavoritePost,
} from '../../../store/postsWithSlice/slice'

const Posts = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts.posts)

	const createNewPost = (newPost) => {
		dispatch(createPostAction(newPost))
	}
	const handleDelete = (id) => {
		dispatch(deletePost(id))
	}
	const handleFavorite = (id) => {
		dispatch(toggleFavoritePost(id))
	}
	return (
		<>
			<CreatePost create={createNewPost} />
			<ol className='list-group list-group-numbered my-2'>
				{posts.map((post) => (
					<li
						key={post.id}
						className='list-group-item d-flex justify-content-between align-items-start'
					>
						<div className='ms-2 me-auto'>
							<div className='fw-bold'>{post.title}</div>
							{post.body}
						</div>
						<div
							className='btn btn-danger'
							onClick={() => handleDelete(post.id)}
						>
							Dell
						</div>
						<div
							className={`ms-2 btn btn-${post.favorite ? 'success' : 'danger'}`}
							onClick={() => handleFavorite(post.id)}
						>
							Favorite
						</div>
					</li>
				))}
			</ol>
		</>
	)
}

export default Posts
