import { createAction, createSlice } from '@reduxjs/toolkit'
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
    categoryCreateSuccessed: (state, action) => {
      state.entities.push(action.payload)
    },
    categoryUpdateSuccessed: (state, action) => {
      state.entities[state.entities.findIndex((c) => c._id === action.payload._id)]=action.payload
    },
  },
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesRecived, categoriesRequestFailed, categoryCreateSuccessed, categoryUpdateSuccessed } = actions

const categoryCreateFailed = createAction('categories/categoryCreateFailed')
const categoryCreateRequested = createAction('categories/categoryCreateRequested')
const categoryUpdateFailed = createAction('categories/categoryUpdateFailed')
const categoryUpdateRequested = createAction('categories/categoryUpdateRequested')


export const loadCategories = (payload) => async (dispatch) => {
  dispatch(categoriesRequested())
  try {
    const data = await categoryService.fetchAll(payload)
    dispatch(categoriesRecived(data))
  } catch (error) {
    dispatch(categoriesRequestFailed(error.message))
  }
}
export const loadActiveCategories = () => async (dispatch) => {
  dispatch(categoriesRequested())
  try {
    const data = await categoryService.fetchAll({'isShow': true})
    dispatch(categoriesRecived(data))
  } catch (error) {
    dispatch(categoriesRequestFailed(error.message))
  }
}


export const createCategory = (payload) => async (dispatch) => {
  dispatch(categoryCreateRequested())
  try {
    const { content } = await categoryService.create(payload)
    dispatch(categoryCreateSuccessed(content))
  } catch (error) {
    dispatch(categoryCreateFailed(error.message))
  }
}
export const updateCategory = (payload) => async (dispatch) => {
  dispatch(categoryUpdateRequested())
  try {
    const { content } = await categoryService.update(payload)
    dispatch(categoryUpdateSuccessed(content))
  } catch (error) {
    dispatch(categoryUpdateFailed(error.message))
  }
}
// export const getCategoryId = (slug)

export const getCategories = () => (state) => state.categories.entities
export const getCategoriesLoading = () => (state) => state.categories.isLoading
export const getCategorySlug = (slug) => (state) => state.categories.entities.filter((c) => c.slug === slug)[0]

export default categoriesReducer
