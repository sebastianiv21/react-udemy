import { apiSlice } from '../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints are defined here
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth', // endpoint url
        method: 'POST', // http method
        body: { ...credentials } // body data
      })
    })
  })
})

export const { useLoginMutation } = authApiSlice