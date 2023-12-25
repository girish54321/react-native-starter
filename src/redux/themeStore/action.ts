import AsyncStorage from '@react-native-community/async-storage'
import { themSlice } from './reducers';
import { Dispatch } from 'redux';
import { APP_CONST } from 'Config/Colors';

export const checkTheme = () => async (dispatch: Dispatch,) => {
  AsyncStorage.getItem(APP_CONST.CHECK_THEME).then((data) => {
    if (data) {
      const jsonValue = JSON.parse(data);
      dispatch(themSlice.actions.checkThemAction(jsonValue.isDarkTheme))
    } else {
      dispatch({
        type: APP_CONST.CHECK_THEME,
        payload: false
      })
    }
  })
}

