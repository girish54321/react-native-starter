import AsyncStorage from '@react-native-community/async-storage';
import AuthType from './authActionType';
import { createReducer } from "reduxsauce";

export interface AUTH_TYPE {
  isLoading: boolean,
  userLoggedIn: boolean,
  userName: string,
  email: string,
  token:string
}
const INITIAL_STATE = {
  isLoading: true,
  userLoggedIn: false,
  userName: null,
  email: null,
  token:null
};

const userLoginReducer = (state: AUTH_TYPE,action :any) => {
  const jsonValue = JSON.stringify(action.payload);
  AsyncStorage.setItem('USER_LOGIN', jsonValue);
  return {
    ...state,
    ...action.payload,
    isLoading: false,
  };
}

const checkUserLoginReducer = (state: AUTH_TYPE,action :any) => {
  return {
    ...state,
    ...action.payload,
    isLoading: false,
  };
}

const userLoginLogOutReducer = (state: AUTH_TYPE,) => {
  AsyncStorage.removeItem('USER_LOGIN');
  return {
    ...state,
    isLoading: false,
    userLoggedIn: false,
    userName: null,
    email: null,
  };
}

const ACTION_HANDLERS = {
  [AuthType.LOGIN]: userLoginReducer,
  [AuthType.CHECK_LOGIN]: checkUserLoginReducer,
  [AuthType.LOGOUT]: userLoginLogOutReducer
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
