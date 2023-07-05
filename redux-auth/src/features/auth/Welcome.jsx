import { useSelector } from 'react-redux'
import { selectCurrentToken, selectCurrentUser } from './authSlice'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  const token = useSelector(selectCurrentToken)
  const user = useSelector(selectCurrentUser)

  const welcome = user ? `Welcome ${user}!` : 'Welcome!'
  const tokenAbbr = token ? `${token.slice(0, 10)}...` : 'No token'
  return (
    <section>
      <h2>{welcome}</h2>
      <p>Token: {tokenAbbr}</p>
      <p>
        <Link to='/userslist'>Go to the users list</Link>
      </p>
    </section>
  )
}
