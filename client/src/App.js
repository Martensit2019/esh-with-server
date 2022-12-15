import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, useRoutes, useLocation } from 'react-router-dom'

import routes from './routes'
import localStorageService from './services/localStorage.service'
import AuthLoader from './components/hoc/authLoader'

function App() {
  const role = localStorageService.getUserRole()
  const location = useLocation()
  const elements = useRoutes(routes(role, location))

 

  return <AuthLoader>{elements}</AuthLoader>
}

export default App
