import { createAction, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

const initialState=localStorageService.getAccessToken()?{
  entities: null,
  currentUser: null,
  auth: {userId:localStorageService.getUserId()},
  isLoggedIn: true,
}:{
  entities: null,
    currentUser: null,
    auth: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // initialState: {
  //   entities: null,
  //   currentUser: null,
  //   auth: null,
  //   isLoggedIn: false,
  // },

  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
    },
    currentUserRequestSuccess: (state, action) => {
      console.log('fromAuth', action.payload);
      // state.auth = action.payload
      state.isLoggedIn = true
    },
    currentUserRequestFailed: (state, action) => {
      state.error = action.payload
    },
    // userCreated: (state, action) => {
    //   if (!Array.isArray(state.entities)) {
    //     state.entities = []
    //   }
    //   state.entities.push(action.payload)
    // },
    userLoggedOut: (state) => {
      state.entities = null
      state.currentUser = null
      state.isLoggedIn = false
      state.auth = null
      // state.dataLoaded = false
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
      state.isLoggedIn = true
    },
    // userUpdateSuccess: (state, action) => {
    //   state.entities[state.entities.findIndex((u) => u._id === action.payload._id)] = action.payload
    // },
    // authRequested: (state) => {
    //   state.error = null
    // },
  },
})

const { reducer: authReducer, actions } = authSlice

export const { authRequestSuccess, authRequestFailed, currentUserRequestSuccess, currentUserRequestFailed, userLoggedOut, setCurrentUser } = actions

const authRequested = createAction('users/authRequested')

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    console.log('payload from auth', payload)
    console.log('redirect from auth', redirect)
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.login({ email, password })
      console.log('data from storeAuth', data)
      dispatch(authRequestSuccess({ userId: data.userId }))
      localStorageService.setTokens({...data, role: data.currentUser.role})
      // localStorageService.setTokens(data)
      dispatch(setCurrentUser(data.currentUser))
      // history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error
      if (code === 400) {
        // const errorMessage = generateAuthError(message);
        // dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message))
      }
    }
  }

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested())
  try {
    const data = await authService.register(payload)
    localStorageService.setTokens(data)
    dispatch(setCurrentUser(data.currentUser))
    dispatch(authRequestSuccess({ userId: data.userId }))
  } catch (error) {
    dispatch(authRequestFailed(error.message))
  }
}

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData()
  dispatch(userLoggedOut())
  // history.push("/");
}
export const getUserFromLS = (userId) => async (dispatch) => {
  dispatch(currentUserRequestSuccess())
  try {
    const data = await authService.getCurrentUser(userId)
    dispatch(setCurrentUser(data))
  } catch (error) {
    dispatch(authRequestFailed(error.message))
  }
}
export const updateUser =(payload)=>async (dispatch) =>{
  dispatch(authRequested())
  try{
    const data = await authService.updateUserData( payload )
    dispatch(setCurrentUser(data))
  } catch (error) {
    dispatch(authRequestFailed(error.message))
  }
}

export const getCurrentUser = () => (state) => state.auth.currentUser


export default authReducer
