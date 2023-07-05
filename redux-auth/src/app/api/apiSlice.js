import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500', // backend url, move to .env
  credentials: 'include', // send cookies
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token // get token from store
    if (token) {
      headers.set('authorization', `Bearer ${token}`) // set token in header
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.originalStatus === 403) {
    console.log('sending refresh token')

    const refreshResult = await baseQuery('/refresh', api, extraOptions) // send refresh token to /refresh endpoint
    console.log('refreshResult', refreshResult)

    if (refreshResult?.data) {
      const user = getState().auth.user

      api.dispatch(setCredentials({ ...refreshResult.data, user })) // set new credentials in store

      result = await baseQuery(args, api, extraOptions) // retry original request
    } else {
      api.dispatch(logOut()) // log out if refresh token is invalid
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
})
