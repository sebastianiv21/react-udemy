import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  // reducer's name
  reducerPath: 'todos',
  // base url for all endpoints
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  // endpoints related to todos
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

// auto generated hooks, they start with 'use', followed by the name of the endpoint and 'Query' at the end
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
