import userListReducer from './UserListStore/userListReducer'
import themeReducer from './themeStore/reducers'
import authReducer from './authStore/authReducers'
import appReducers from './appStore/AppReducers'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  userListReducer,
  themeReducer,
  authReducer,
  appReducers
})

import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
