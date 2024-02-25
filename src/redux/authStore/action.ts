import { call } from 'Network/services';
import { useAuthStore } from './authReducers';
import { handleApiError } from 'Config/ErrorHandleUtils';

export const useUserLoginAction = () => {
  const { userLoginAction } = useAuthStore((state) => state)

  const userLogin = (queryParam: any) => {
    call.userLoginApi(queryParam).then((responseAxios: any) => {
      let data = {
        ...queryParam,
        userLoggedIn: true,
        token: responseAxios.token
      }
      userLoginAction(data)
    }).catch((error: any) => {
      handleApiError(error,);
    });
  };

  return { userLogin }
}

