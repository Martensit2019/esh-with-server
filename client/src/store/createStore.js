import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories'
import productsReducer from './products'

import filterReducer from './filter'
import favouriteReducer from './favourite'
import compareSlice from './compare'
import cartReducer from './cart'



const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  filter: filterReducer,
  favourite: favouriteReducer,
  compare: compareSlice,
  cart: cartReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}
