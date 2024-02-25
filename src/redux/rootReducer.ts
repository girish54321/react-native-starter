import themeReducer from './themeStore/reducers'
import appReducers from './appStore/AppReducers'

const rootReducer = combineReducers({
  themeReducer,
  appReducers
})

import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
})
