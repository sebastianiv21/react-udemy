import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'

export const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={{ pathname: '/login', state: { from: location }, replace: true }}
    />
  ) // replace: true is used to replace the current entry in the history stack instead of adding a new one
}
