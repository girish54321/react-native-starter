import AsyncStorage from '@react-native-community/async-storage'
import ThemActionType from './themActionType'
import { themSlice } from './reducers';
import { Dispatch } from 'redux';

export const checkTheme = () => async (dispatch: Dispatch,) => {
  AsyncStorage.getItem(ThemActionType.CHECK_THEME).then((data) => {
    if (data) {
      const jsonValue = JSON.parse(data);
      dispatch(themSlice.actions.checkThemReducer(jsonValue.isDarkTheme))
    } else {
      dispatch({
        type: ThemActionType.CHECK_THEME,
        payload: false
      })
    }
  })
}

