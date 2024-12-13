import AsyncStorage from '@react-native-community/async-storage';
import { APP_CONST } from 'Config/Colors';
import { create } from 'zustand';

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

interface IUseUserListStore {
  useAuthStore: AUTH_TYPE;
  userLoginAction: (data: any) => void;
  setUserLoadingAction: (payload: any) => void;
  checkUserLoginAction: (payload: any) => void;
  userLoginLogOutAction: () => void;
}

export const useAuthStore = create<IUseUserListStore>()((set) => ({
  useAuthStore: INITIAL_STATE,
  userLoginAction: async (payload) => {
    const jsonValue = JSON.stringify(payload);
    await AsyncStorage.setItem(APP_CONST.USER_LOGIN, jsonValue);
    return set(() => {
      return {
        useAuthStore: {
          ...payload
        }
      }
    });
  },
  setUserLoadingAction: async (payload) => {
    const jsonValue = JSON.stringify(payload);
    await AsyncStorage.setItem(APP_CONST.USER_LOGIN, jsonValue);
    return set(() => {
      return {
        useAuthStore: {
          ...payload
        }
      }
    });
  },
  checkUserLoginAction: async (payload) => {
    return set(() => {
      return {
        useAuthStore: {
          ...payload, isLoading: false
        }
      }
    })
  },
  userLoginLogOutAction: async () => {
    await AsyncStorage.removeItem(APP_CONST.USER_LOGIN);
    return set(() => {
      return {
        useAuthStore: {
          isLoading: false,
          userLoggedIn: false,
          userName: null,
          email: null,
        }
      }
    });
  }
}))
