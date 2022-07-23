import UserActionTypes from "./UserActionTypes"
import { call } from 'Network/services';
import { handleApiError } from 'Config/ErrorHandleUtils';
import { Dispatch } from 'redux';


export const getServiceResponse = (queryParam: any): any => async (appDispatch: Dispatch) => {
  call.getService(queryParam).then((responseAxios: any) => {
    appDispatch(setUserDataAction(responseAxios.data))
  }).catch((error: any) => {
      handleApiError(error, appDispatch);
  });
};

const setUserDataAction = (payload:any) =>({
  type: UserActionTypes.SET_USER,
  payload
})

export const setUserListError = (payload: any) => ({
  type: UserActionTypes.SET_USER_ERROR,
  payload

})

export const setHomeLoading = () => ({
  type: UserActionTypes.SET_USER_LOADING,
})
