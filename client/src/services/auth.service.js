import httpService from './http.service'
import localStorageService from './localStorage.service'
import config from '../config.json'
import axios from 'axios'

const httpAuth = axios.create({
  baseURL: config.apiEndpoint,
})

const authService = {
  register: async (payload) => {
    const { data } = await httpService.post('auth/signUp', payload)
    return data
  },
  login: async (payload) => {
    const { data } = await httpService.post('auth/signInWithPassword', payload)
    console.log('data from authService', data)
    return data
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get('user/' + localStorageService.getUserId())
    return data
  },
  updateUserData: async (payload) => {
    const { data } = await httpService.patch('user/' + localStorageService.getUserId(), payload)
    return data
  },
  refresh: async () => {
    const data = await httpAuth.post('auth/token', {
      refresh_token: localStorageService.getRefreshToken(),
      role: localStorageService.getUserRole(),
    })
    return data
  },
}

export default authService
