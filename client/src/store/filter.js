import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    isOpenSidebar: false,
    selectedSort: { id: 1, value: 'default', name: 'по умолчанию' },
    productsPerPage: 25,
    isGrid: true,
    currentPage: 1,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar
    },
    setSelectedSort: (state, action) => {
      state.currentPage = 1
      state.selectedSort = action.payload
    },
    setProductsPerPage: (state, action) => {
      state.currentPage = 1
      state.productsPerPage = action.payload
    },
    setCurrentPage:(state, action) => {
      state.currentPage = action.payload
    },
    setListView: (state) => {
      state.isGrid = !state.isGrid
    },
  },
})

const { reducer: filterReducer, actions } = filterSlice

export const { toggleSidebar, setSelectedSort, setProductsPerPage, setCurrentPage, setListView } = actions

export const getIsOpenSidebar = () => (state) => state.filter.IsOpenSidebar
export const getProductsPerPage = () => (state) => state.filter.productsPerPage
export const getCurrentPage = () => (state) => state.filter.currentPage
export const getSelectedSort = () => (state) => state.filter.selectedSort

export default filterReducer
