import React from 'react';
import { useGetTodosQuery } from './store/apis';

const TodoApp = () => {
  // data is initialized to an empty array to avoid undefined errors
  const { data: todos = [], isLoading } = useGetTodosQuery();
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>...</pre>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  );
};

export default TodoApp;
