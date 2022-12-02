import { createSlice } from '@reduxjs/toolkit'
import productService from '../services/product.service'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: null,
    total: null,
    isLoading: true,
    error: null,
    // rangers: {
    //   minifigs: {
    //     min: 0,
    //     max: 0
    //   }
    // }
  },
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true
    },
    productsRecived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    totalRecived: (state, action) => {
      state.total = action.payload
    },
    productsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: productsReducer, actions } = productsSlice
const { productsRequested, productsRecived, totalRecived, productsRequestFailed } = actions

export const loadAllProducts = (sort, order, currentPage, pageSize) => async (dispatch) => {
  dispatch(productsRequested())
  try {
    const { data, headers } = await productService.fetchAll(sort, order, currentPage, pageSize)
    dispatch(productsRecived(data))
    dispatch(totalRecived(headers['x-total-count']))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}
export const loadProductsByCategoryId = (id, sort, order, currentPage, pageSize) => async (dispatch) => {
  dispatch(productsRequested())
  try {
    const { data, headers } = await productService.fetchByCategoryId(id, sort, order, currentPage, pageSize)
    dispatch(productsRecived(data))
    dispatch(totalRecived(headers['x-total-count']))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}
export const loadProductsByType = (type, sort, order, currentPage, pageSize) => async (dispatch) => {
  dispatch(productsRequested())
  try {
    const { data, headers } = await productService.fetchByType(type, sort, order, currentPage, pageSize)
    dispatch(productsRecived(data))
    dispatch(totalRecived(headers['x-total-count']))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}

export const getProducts = () => (state) => state.products.entities
export const getProductsLoading = () => (state) => state.products.isLoading
export const getTotalProducts = () => (state) => state.products.total
// export const getCategoryId=(slug)=>state=>state.categories.entities.filter(c=>c.slug===slug)

export default productsReducer
