import { call } from 'Network/services';
import { useUserListStore } from './userListReducer';

export const useUserListService = () => {
  const actions = useUserListStore((state) => state)
  const getServiceResponse = (queryParam: any) => {
    call.getService(queryParam).then((responseAxios: any) => {
      // appDispatch(userListSlice.actions.setUserDataAction(responseAxios.data))
      actions.setUserDataAction(responseAxios.data)
      // appDispatch(appSlice.actions.hideLoaderAction())
    }).catch((error: any) => {
      // appDispatch(appSlice.actions.hideLoaderAction())
      // handleApiError(error, appDispatch);
    });
  }
  return {
    getServiceResponse
  }
}

