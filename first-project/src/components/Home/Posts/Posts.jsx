import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import json from '../../../posts.json'
import CreatePost from './CreatePost'

import { createPostAction } from '../../../store/posts/actionsPosts'

const Posts = () => {
	// const [posts, setPosts] = useState(json)

	const dispatch = useDispatch()

	// const {posts} = useSelector((state) => state.posts)
	const posts = useSelector((state) => state.posts.posts)

	const createNewPost = (newPost) => {
		dispatch(createPostAction(newPost))
		// setPosts((prev) => [...prev, { title, body, id: posts.length + 1 }])
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
					</li>
				))}
			</ol>
		</>
	)
}

export default Posts
