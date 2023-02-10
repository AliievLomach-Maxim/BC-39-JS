import {
	axiosPublicInstance,
	setTokenAuth,
	axiosPrivateInstance,
} from '../../api/api'

export const signInUser = (body) => {
	return axiosPublicInstance.post('/users', body)
}

export const loginUser = async (body) => {
	const { data } = await axiosPublicInstance.post('auth/login', body)
	setTokenAuth(`Bearer ${data.access_token}`)
	return data
}

export const getProfile = async () => {
	const { data } = await axiosPrivateInstance('/auth/profile')
	return data
}
