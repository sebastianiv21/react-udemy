import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus() // focus on user input on load
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const accessToken = await login({ user, password }).unwrap() // call login mutation. use unwrap() to get the data and make it work with async/await syntax and try/catch
      dispatch(setCredentials({ ...accessToken, user })) // set credentials in store
      setUser('')
      setPassword('')
      navigate('/welcome') // navigate to dashboard
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg('No server connection')
      } else if (error.originalStatus === 401) {
        setErrMsg('Invalid credentials')
      } else {
        setErrMsg('Something went wrong')
      }
      errRef.current.focus() // focus on error message
    }
  }

  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <p ref={errRef}>{errMsg}</p>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='user'
          value={user}
          onChange={handleUserChange}
          ref={userRef}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
