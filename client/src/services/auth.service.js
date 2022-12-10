import httpService from './http.service'

const authService = {
  register: async (data) => {
    const { content } = await httpService.post('auth/signUp', data)
    console.log('content', content);
    return content
  },

}

export default authService
