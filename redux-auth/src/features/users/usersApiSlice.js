import { apiSlice } from '../../app/api/apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
        keepUnusedDataFor: 5 // keep data for 5 seconds
      })
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET'
      })
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = usersApiSlice