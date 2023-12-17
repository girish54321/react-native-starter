import { call } from 'Network/services';
import { handleApiError } from 'Config/ErrorHandleUtils';
import { Dispatch } from 'redux';
import { userListSlice } from './userListReducer';


export const getServiceResponse = (queryParam: any): any => async (appDispatch: Dispatch) => {
  call.getService(queryParam).then((responseAxios: any) => {
    appDispatch(userListSlice.actions.setUserDataAction(responseAxios.data))
  }).catch((error: any) => {
    handleApiError(error, appDispatch);
  });
};
