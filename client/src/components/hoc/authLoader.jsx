import React from 'react'
import { useDispatch } from 'react-redux'
import localStorageService from '../../services/localStorage.service'
import { getUserFromLS } from '../../store/auth'
import { loadCategories } from '../../store/categories'

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch()
  const currentUserId = localStorageService.getUserId()
  const role = localStorageService.getUserRole()

  React.useEffect(() => {
    dispatch(loadCategories())
    // const currentUserId = localStorageService.getUserId()
    if (currentUserId) dispatch(getUserFromLS(currentUserId))
  }, [])
  return children
}

export default AuthLoader
