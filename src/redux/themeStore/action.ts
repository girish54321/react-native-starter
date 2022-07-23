import AsyncStorage from '@react-native-community/async-storage'
import ThemActionType from './themActionType'

export const checkTheme = () => async (dispatch: any, getState: any) => {
  AsyncStorage.getItem(ThemActionType.CHECK_THEME).then((data) => {
    if (data) {
      const jsonValue = JSON.parse(data);
      dispatch({
        type: ThemActionType.CHECK_THEME,
        payload: jsonValue.isDarkTheme
      })
    } else {
      dispatch({
        type: ThemActionType.CHECK_THEME,
        payload: false
      })
    }
  })
}

export const changeTheme = (payload: any) => ({
  type: ThemActionType.CHNAGE_THEME,
  payload,
});

