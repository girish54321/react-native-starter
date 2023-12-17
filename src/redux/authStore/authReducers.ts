import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AUTH_TYPE {
  isLoading: boolean;
  userLoggedIn: boolean;
  userName: string | null;
  email: string | null;
  token: string | null;
}

const INITIAL_STATE: AUTH_TYPE = {
  isLoading: true,
  userLoggedIn: false,
  userName: null,
  email: null,
  token: null,
};


export const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE,
  reducers: {
    userLoginReducer: (state, action: PayloadAction<AUTH_TYPE>) => {
      const jsonValue = JSON.stringify(action.payload);
      AsyncStorage.setItem('USER_LOGIN', jsonValue);
      return { ...state, ...action.payload };
    },
    checkUserLoginReducer: (state, action: PayloadAction<AUTH_TYPE>) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    },
    userLoginLogOutReducer: (state) => {
      AsyncStorage.removeItem('USER_LOGIN');
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


export default authSlice.reducer;