import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favourite: [],
  },

  reducers: {
    addToFavourite: (state, action) => {
      state.favourite.push(action.payload)
    },
    removeFromFavourite: (state, action) => {
      state.favourite = state.favourite.filter((i) => i.id !== action.payload)
    },
  },
})

const { reducer: favouriteReducer, actions } = favouriteSlice

export const { addToFavourite, removeFromFavourite } = actions

export const getFavourite = () => (state) => state.favourite.favourite
export const idsProductsFavourite = () => (state) => state.favourite.favourite.map((item) => item.id)
export const totalProductsFavourite = () => (state) => state.favourite.favourite.length

export default favouriteReducer
