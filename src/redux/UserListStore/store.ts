import { createStore } from 'redux'
import { userListReducer } from './userListReducer'

export const store = createStore(userListReducer)
