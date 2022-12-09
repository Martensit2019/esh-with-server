import httpService from './http.service'

const authService = {
  register: async ({ email, password }) => {
    const { data } = await httpService.post('auth/signUp', { email, password, returnSecureToken: true })
    return data
  },

}

export default authService
