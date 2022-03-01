import AsyncStorage from '@react-native-community/async-storage';
import { ActionTypes } from 'constants/ActionTypes';

export interface authType {
  isLoading: boolean,
  userLoggedIn: boolean,
  userName: string,
  email: string,
}
const initialState = {
  isLoading: true,
  userLoggedIn: false,
  userName: null,
  email: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const jsonValue = JSON.stringify(action.payload);
      AsyncStorage.setItem('USER_LOGIN', jsonValue);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case ActionTypes.CHECK_LOGIN:
      if (action.payload) {
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        };
      } else {
        return { ...state, isLoading: false };
      }

    case ActionTypes.LOGOUT:
      AsyncStorage.removeItem('USER_LOGIN');
      return {
        ...state,
        isLoading: false,
        userLoggedIn: false,
        userName: null,
        email: null,
      };

    default:
      return state;
  }
};
