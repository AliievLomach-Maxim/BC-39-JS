import axios from 'axios'

export const axiosPublicInstance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const axiosPrivateInstance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const setTokenAuth = (value) => {
	axiosPrivateInstance.defaults.headers.common['Authorization'] = value
}

export const dellTokenAuth = () => {
	delete axiosPrivateInstance.defaults.headers.common['Authorization']
}
