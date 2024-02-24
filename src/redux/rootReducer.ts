import themeReducer from './themeStore/reducers'
import authReducer from './authStore/authReducers'
import appReducers from './appStore/AppReducers'

const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  appReducers
})

import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
})
