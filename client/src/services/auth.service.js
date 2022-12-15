import httpService from './http.service'
import localStorageService from './localStorage.service'


const authService = {
  register: async (payload) => {
    const { data } = await httpService.post('auth/signUp', payload)
    return data
  },
  login: async (payload) => {
    const { data } = await httpService.post('auth/signInWithPassword', payload)
    console.log('data from authService', data);
    return data
  },
  getCurrentUser: async()=>{
    const {data} = await httpService.get('user/' + localStorageService.getUserId())
    return data
  },
  updateUserData: async(payload)=>{
    const {data} = await httpService.patch('user/' + localStorageService.getUserId(), payload)
    return data
  }


}

export default authService
