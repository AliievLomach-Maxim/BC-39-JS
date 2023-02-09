import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const setTokenAuth = (value) => {
	console.log(value)
	axiosInstance.defaults.headers.common['Authorization'] = value
}

export const dellTokenAuth = () => {
	delete axiosInstance.defaults.headers.common['Authorization']
}
