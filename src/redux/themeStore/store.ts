import { createStore } from 'redux'
import  themeReducer  from './reducers'

export const store = createStore(themeReducer)
