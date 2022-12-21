import httpService from './http.service'

const categoryService = {
  fetchAll: async () => {
    const { data } = await httpService.get('category')
    return data
  },
  create: async(payload)=>{
    console.log('from categoryService', payload);
    const {data} = await httpService.post('category', payload)
    return data
  },
  update: async(payload)=>{    
    const {data} = await httpService.patch('category/' + payload._id, payload)
    return data
  },
  remove: async(payload)=>{    
    const {data} = await httpService.delete('category/' + payload)
    
    return data
  },
}

export default categoryService
