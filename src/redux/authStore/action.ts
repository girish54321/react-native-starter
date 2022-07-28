import { handleApiError } from 'Config/ErrorHandleUtils';
import { call } from 'Network/services';
import { Dispatch } from 'redux';
import AuthType from './authActionType';

export const loginUser = (payload: any) => ({
  type: AuthType.LOGIN,
  payload,
});

export const logOutUser = () => ({
  type: AuthType.LOGOUT,
});
export const checkUserLogin = (payload: any) => ({
  type: AuthType.CHECK_LOGIN,
  payload,
});


export const userLoginAction = (queryParam: any): any => async (appDispatch: Dispatch) => {
  call.userLoginApi(queryParam).then((responseAxios: any) => {
    let data ={
      ...queryParam,
      userLoggedIn: true,
      token: responseAxios.token
    }
    appDispatch(loginUser(data))
  }).catch((error: any) => {
      handleApiError(error, appDispatch);
  });
};