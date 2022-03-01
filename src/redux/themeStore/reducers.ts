import AsyncStorage from '@react-native-community/async-storage'
import { ActionTypes } from 'constants/ActionTypes'

export interface darkThemeType {
  isDarkTheme: boolean
}

const initialState: darkThemeType = {
  isDarkTheme: false
}

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHNAGE_THEME:
      const jsonValue = JSON.stringify({ isDarkTheme: action.payload })
      AsyncStorage.setItem(ActionTypes.CHECK_THEME, jsonValue);
      return {
        ...state,
        isDarkTheme: action.payload
      }
    case ActionTypes.CHECK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload
      }
    default:
      return state
  }
}
