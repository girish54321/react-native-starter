import AsyncStorage from '@react-native-community/async-storage'
import { ActionTypes } from 'constants/ActionTypes';

export const checkTheme = () => async (dispatch: any, getState: any) => {
  AsyncStorage.getItem(ActionTypes.CHECK_THEME).then((data) => {
    if (data) {
      const jsonValue = JSON.parse(data);
      dispatch({
        type: ActionTypes.CHECK_THEME,
        payload: jsonValue.isDarkTheme
      })
    } else {
      dispatch({
        type: ActionTypes.CHECK_THEME,
        payload: false
      })
    }
  })
}

export const changeTheme = (payload: any) => ({
  type: ActionTypes.CHNAGE_THEME,
  payload,
});

