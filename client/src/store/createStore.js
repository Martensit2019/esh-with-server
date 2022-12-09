import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories'
import productsReducer from './products'

import filterReducer from './filter'
import favouriteReducer from './favourite'
import compareSlice from './compare'
import cartReducer from './cart'
import authReducer from './auth'



const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  filter: filterReducer,
  favourite: favouriteReducer,
  compare: compareSlice,
  cart: cartReducer,
  auth: authReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}
