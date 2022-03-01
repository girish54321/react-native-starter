import { ActionTypes } from '../../constants/ActionTypes';

export const loginUser = (payload: any) => ({
  type: ActionTypes.LOGIN,
  payload,
});

export const logOutUser = () => ({
  type: ActionTypes.LOGOUT,
});
export const checkUserLogin = (payload: any) => ({
  type: ActionTypes.CHECK_LOGIN,
  payload,
});
