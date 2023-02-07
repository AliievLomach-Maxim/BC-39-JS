import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/' }),
	tagTypes: ['News'],
	endpoints: (builder) => ({
		getTotalNews: builder.query({
			// query: () => ( '/v2/top-headlines?country=us'),
			query: () => ({
				url: '/v2/top-headlines?country=us',
				headers: {
					'X-Api-Key': API_KEY,
				},
			}),
			providesTags: ['News'],
		}),
		dellNews: builder.mutation({
			query: (id) => ({
				url: `/v2/top-headlines/${id}?country=us`,
				headers: {
					'X-Api-Key': API_KEY,
				},
				method: 'DELETE',
			}),
			invalidatesTags: ['News'],
		}),
	}),
})

export const { useGetTotalNewsQuery, useDellNewsMutation } = newsApi
