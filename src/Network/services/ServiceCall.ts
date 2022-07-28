import { AxiosInstance } from 'axios';
import { loginUrl, usersUrl } from 'constants/ServiceUrl';

export default (api: AxiosInstance) => {

    function userLoginApi(queryParam: any) {
        return api.post(loginUrl, queryParam);
    }

    function postService(queryParam: any, bodyParams: any) {
        return api.post(usersUrl, bodyParams, { params: queryParam });
    }

    function getService(params: any) {
        return api.get(usersUrl, { params: params });
    }

    return {
        postService,
        getService,
        userLoginApi
    }
}