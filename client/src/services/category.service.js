import httpService from './http.service'

const categoryService = {
  fetchAll: async () => {
    // const { data } = await httpService.get('categories')
    const { data } = await httpService.get('categories?isShow=true')
    return data
  },
  add: async(data)=>{
    
  }
}

export default categoryService
