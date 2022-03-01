import { userListReducer } from './UserListStore/userListReducer'
import { themeReducer } from './themeStore/reducers'
import { authReducer } from './authStore/authReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userListReducer,
  themeReducer,
  authReducer
})

export default rootReducer
