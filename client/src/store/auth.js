import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    entities: null,
    auth: null,
    isLoggedIn: false,
  },

  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
    },
    // userCreated: (state, action) => {
    //   if (!Array.isArray(state.entities)) {
    //     state.entities = []
    //   }
    //   state.entities.push(action.payload)
    // },
    // userLoggedOut: (state) => {
    //   state.entities = null
    //   state.isLoggedIn = false
    //   state.auth = null
    //   state.dataLoaded = false
    // },
    // userUpdateSuccess: (state, action) => {
    //   state.entities[state.entities.findIndex((u) => u._id === action.payload._id)] = action.payload
    // },
    // authRequested: (state) => {
    //   state.error = null
    // },
  },
})

const { reducer: authReducer, actions } = authSlice

export const { authRequestSuccess, authRequestFailed } = actions

const authRequested = createAction('users/authRequested')

export const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested())
    try {
      const data = await authService.register({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequestSuccess({ userId: data.localId }));
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  }

// export const getCart = () => (state) => state.cart.cart
// export const idsProductsCart = () => (state) => state.cart.cart.map((item) => item.id)
// export const totalProductsCart = () => (state) => state.cart.cart.length
// export const totalPriceCart = () => (state) => !state.cart.cart.length ? 0 : state.cart.cart.reduce((sum, p) => (sum += p.count * p.price), 0)

export default authReducer
