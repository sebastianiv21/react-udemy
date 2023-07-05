import { useGetUsersQuery } from './usersApiSlice'
import { Link } from 'react-router-dom'

export const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error}</div>
  }

  return (
    isSuccess && (
      <section>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/userslist/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  )
}
