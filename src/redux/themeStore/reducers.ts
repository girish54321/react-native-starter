import ThemActionType from './themActionType'
import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DARK_THEME_TYPE {
  isDarkTheme: boolean
}

const INITIAL_STATE: DARK_THEME_TYPE = {
  isDarkTheme: false
}

const changeThemReducer = (state: DARK_THEME_TYPE, action: any) => {
  const jsonValue = JSON.stringify({ isDarkTheme: action.payload })
  AsyncStorage.setItem(ThemActionType.CHECK_THEME, jsonValue);
  return {
    ...state,
    isDarkTheme: action.payload
  }
}

const checkThemReducer = (state: DARK_THEME_TYPE, action: PayloadAction<boolean>) => {
  return {
    ...state,
    isDarkTheme: action.payload
  }
}


export const themSlice = createSlice({
  name: "themSlice",
  initialState: INITIAL_STATE,
  reducers: {
    changeThemReducer: (state, action: PayloadAction<DARK_THEME_TYPE>) => {
      return changeThemReducer(state, action)
    },
    checkThemReducer: (state, action: PayloadAction<boolean>) => {
      return checkThemReducer(state, action)
    },
  },
});


export default themSlice.reducer;