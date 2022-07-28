import { createStore } from 'redux';
import authReducer  from './authReducers';

export const store = createStore(authReducer);
