import AsyncStorage from '@react-native-community/async-storage';
import { APP_CONST } from 'Config/Colors';
import { create } from 'zustand';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const INITIAL_STATE = {
  isDarkTheme: false
}

interface DD {
  isDarkTheme: boolean
}
export interface DARK_THEME_TYPE {
  themStore: DD;
  checkThemAction: (isDarkTheme: boolean) => void;
  changeThemAction: (data: any) => void;
}


export const userThemStore = create<DARK_THEME_TYPE>()((set) => ({
  themStore: INITIAL_STATE,
  checkThemAction: (data) => set((state) => ({
    themStore: {
      ...state.themStore, isDarkTheme: data
    }
  })),
  changeThemAction: async (data) => {
    const jsonValue = JSON.stringify({ isDarkTheme: data })
    AsyncStorage.setItem(APP_CONST.CHECK_THEME, jsonValue);
    await changeNavigationBarColor(data ? '#000000' : '#ffffff', !data);
    return set((state) => ({
      themStore: {
        ...state.themStore, isDarkTheme: data
      }
    }))
  }
}))

