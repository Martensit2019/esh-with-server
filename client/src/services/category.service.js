import httpService from './http.service'

const categoryService = {
  fetchAll: async () => {
    // const { data } = await httpService.get('categories')
    const { data } = await httpService.get('category')
    // const { data } = await httpService.get('category?isShow=true')
    return data
  },
  add: async(data)=>{
    
  }
}

export default categoryService
