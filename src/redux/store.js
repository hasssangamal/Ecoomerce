import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import categoriesReducer from './categoriesReducer'
import brandsReducer from './brandsReducer'

export const store = configureStore({
  reducer: {

    counter: counterReducer,
    categories:categoriesReducer,
    brands:brandsReducer,
  
  }
  
})