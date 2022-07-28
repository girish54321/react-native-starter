import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getBaseUrl, getEnvironmentVariable } from "constants/AppConstants";


const defaultTimeOut = 30000;
const DEBUG = getEnvironmentVariable();

const Api = Axios.create({
    headers: {
        'Content-Type': 'application/json',

    },
    withCredentials: true,
    timeout: defaultTimeOut,
});


Api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        /** In dev, intercepts request and logs it into console for dev */
        config.baseURL = getBaseUrl();
        if (DEBUG) {
            console.info('Service Request', config);
        }
        return config;
    },
    (error: any) => {
        if (DEBUG) { console.log('Service Error', error); }
        return Promise.reject(error);
    });

/**
* Passes response.data to services.
* In dev, intercepts response and logs it into console for dev
*/


Api.interceptors.response.use(

    (response: AxiosResponse) => {
        if (DEBUG) { console.info('Service Response', response); }
        try {
            // Need to change after Backend changes
            return Promise.resolve((response.data));
        } catch (error) {
            if (DEBUG) { console.log('Error: ', error); }
            return Promise.reject(error)
        }
    },
    async (error: any) => {
        if (error.response && error.response.status === 401) {
            // TODO change according project requirement
        }
        if (error.response && error.response.data) {
            if (DEBUG) { console.log('Error: ', error.response); }
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    });

export default Api;
