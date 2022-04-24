import { getUsers } from '../../Network/index';
import { AxiosResponse } from 'axios';
import { UserList } from '../../models/responseType/UserListResponse';
import { ActionTypes } from 'constants/ActionTypes';

export const setUserData = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: ActionTypes.SET_USER_LOADING
  })
  getUsers()
    .then((res: AxiosResponse) => {
      if (res.status === 200) {
        let data: UserList[] = [];
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
        dispatch({
          type: ActionTypes.SET_USER,
          payload: data
        })
      } else {
        dispatch({
          type: ActionTypes.SET_USER_ERROR,
          payload: `Error :${res.status}`
        })
      }
    })
    .catch((err) => {
      console.error("Fetch Example Error: ", err);
      dispatch({
        type: ActionTypes.SET_USER_ERROR,
        payload: `"Fetch Example Error: ${err}`
      })
    });
}

export const setUserListError = (payload: any) => ({
  type: ActionTypes.SET_USER_ERROR,
  payload

})

export const setHomeLoading = (payload: any) => ({
  type: ActionTypes.SET_USER_LOADING,
})
