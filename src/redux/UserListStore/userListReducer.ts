import { UserList } from 'models/responseType/UserListResponse'
import { createReducer } from "reduxsauce";
import UserActionTypes from "./UserActionTypes"
export interface USER_LIST_STATE_TYPE {
  isLoading: boolean;
  error: string;
  users: UserList[];
}

const INITIAL_STATE: USER_LIST_STATE_TYPE = {
  isLoading: true,
  error: "",
  users: [],
}

const setUserDataReducer = (state: USER_LIST_STATE_TYPE,action :any) => {
  let data = action.payload 
  return {
    ...state,
    users: data,
    isLoading: false,
    error: null,
  }
}

const setUserErrorReducer = (state: USER_LIST_STATE_TYPE,action :any) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  }
}

const setUserLoadingReducer = (state: USER_LIST_STATE_TYPE) => {
  return {
    ...state,
    isLoading: true,
    error: null
  }
}

const ACTION_HANDLERS = {
  [UserActionTypes.SET_USER]: setUserDataReducer,
  [UserActionTypes.SET_USER_LOADING]: setUserErrorReducer,
  [UserActionTypes.SET_USER_ERROR]: setUserLoadingReducer
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
