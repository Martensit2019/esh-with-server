import { createSlice } from '@reduxjs/toolkit'
import categoryService from '../services/category.service'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true
    },
    categoriesRecived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    categoriesRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesRecived, categoriesRequestFailed } = actions

export const loadCategories = () => async (dispatch) => {
  dispatch(categoriesRequested())
  try{
    const data = await categoryService.fetchAll()
    dispatch(categoriesRecived(data))
  }catch(error){
    dispatch(categoriesRequestFailed(error.message))
  }
}
// export const getCategoryId = (slug) 

export const getCategories=()=>state=>state.categories.entities
export const getCategoriesLoading=()=>state=>state.categories.isLoading
export const getCategorySlug=(slug)=>state=>state.categories.entities.filter(c=>c.slug===slug)[0]

export default categoriesReducer
