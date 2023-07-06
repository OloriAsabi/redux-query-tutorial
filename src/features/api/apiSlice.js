import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//http://localhost:3500
export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})