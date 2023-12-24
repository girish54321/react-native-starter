import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APP_CONST } from 'Config/Colors';

export interface APP_STATE {
  isLoading: boolean;
  showModalSheet: boolean;
}

const INITIAL_STATE: APP_STATE = {
  isLoading: false,
  showModalSheet: false,
};


export const appSlice = createSlice({
  name: "appSlice",
  initialState: INITIAL_STATE,
  reducers: {
    showLoaderAction: (state) => {
      return { ...state, isLoading: true };
    },
    hideLoaderAction: (state) => {
      return { ...state, isLoading: false };
    },
    userLoginAction: (state, action: PayloadAction<APP_STATE>) => {
      const jsonValue = JSON.stringify(action.payload);
      AsyncStorage.setItem(APP_CONST.USER_LOGIN, jsonValue);
      return { ...state, ...action.payload };
    },
    checkUserLoginAction: (state, action: PayloadAction<APP_STATE>) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    },
    userLoginLogOutAction: (state) => {
      AsyncStorage.removeItem(APP_CONST.USER_LOGIN);
      return {
        ...state,
        isLoading: false,
        userLoggedIn: false,
        userName: null,
        email: null,
      };
    },
  },
});


export default appSlice.reducer;