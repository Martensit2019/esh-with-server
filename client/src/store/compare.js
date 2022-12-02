import { createSlice } from '@reduxjs/toolkit'

const compareSlice = createSlice({
  name: 'compare',
  initialState: {
    compare: [],
  },

  reducers: {
    addToCompare: (state, action) => {
      state.compare.push(action.payload)
    },
    removeFromCompare: (state, action) => {
      state.compare = state.compare.filter((i) => i.id !== action.payload)
    },
  },
})

const { reducer: compareReducer, actions } = compareSlice

export const { addToCompare, removeFromCompare } = actions

export const getCompare = () => (state) => state.compare.compare
export const idsProductsCompare = () => (state) => state.compare.compare.map((item) => item.id)
export const totalProductsCompare = () => (state) => state.compare.compare.length

export default compareReducer
