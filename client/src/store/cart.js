import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    decrease: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload)
      if (item.count > 1) {
        item.count--
      } else {
        state.cart = state.cart.filter((i) => i.id !== action.payload)
      }
    },
    increase: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload)
      item.count++
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload)
    },
    clearCart: (state, action) => {
      state.cart = []
    },
  },
})

const { reducer: cartReducer, actions } = cartSlice

export const { addToCart, decrease, increase, removeFromCart } = actions
export const getCart = () => (state) => state.cart.cart
export const idsProductsCart = () => (state) => state.cart.cart.map((item) => item.id)
export const totalProductsCart = () => (state) => state.cart.cart.length
export const totalPriceCart = () => (state) => !state.cart.cart.length ? 0 : state.cart.cart.reduce((sum, p) => (sum += p.count * p.price), 0)

export default cartReducer
