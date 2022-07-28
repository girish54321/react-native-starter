import AsyncStorage from '@react-native-community/async-storage'
import ThemActionType from './themActionType'
import { createReducer } from "reduxsauce";

export interface DARK_THEME_TYPE {
  isDarkTheme: boolean
}

const INITIAL_STATE: DARK_THEME_TYPE = {
  isDarkTheme: false
}

const changeThemReducer = (state: DARK_THEME_TYPE,action :any) => {
  const jsonValue = JSON.stringify({ isDarkTheme: action.payload })
  AsyncStorage.setItem(ThemActionType.CHECK_THEME, jsonValue);
  return {
    ...state,
    isDarkTheme: action.payload
  }
}

const checkThemReducer = (state: DARK_THEME_TYPE,action :any) => {
  return {
    ...state,
    isDarkTheme: action.payload
  }
}

const ACTION_HANDLERS = {
  [ThemActionType.CHNAGE_THEME]: changeThemReducer,
  [ThemActionType.CHECK_THEME]: checkThemReducer,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
 