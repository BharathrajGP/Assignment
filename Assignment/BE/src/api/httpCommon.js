import axios from 'axios'
import axiosRetry from 'axios-retry'

import { errorMsg } from '../components/Shared/Notification/ToastNotification';
import { Url } from "../helper/apiRoutes";
import { SessionStorage } from '../util/SessionStorage'
import { fortmatData } from '../util/utils';
import { SessionStorageKeys } from '../helper/constants';

export const axiosInstance = axios.create({
    baseURL: `${Url.baseApiUrl}`,
    timeout: 10000
});

axiosInstance.defaults.headers = {
    'Content-Type': 'application/json',
}

const retryDelay = (retryNumber = 0) => {
    const seconds = Math.pow(2, retryNumber) * 1000;
    const randomMs = 1000 * Math.random();
    return seconds + randomMs;
};

axiosRetry(axiosInstance, {
    retries: 2,
    retryDelay,
    // retry on Network Error & 5xx responses
    retryCondition: axiosRetry.isRetryableError,
});

const DEBUG = process.env.NODE_ENV === "development";

function errorResponseHandler(error) {
    if (DEBUG) { console.error(`Error: ${fortmatData(error)}`); }

    if (error.response && error.response.data) {
        errorMsg(error.response.data);
    }
    else if (error.message) {
        errorMsg(error.message);
    } else {
        errorMsg("Please contact message...");
    }
}

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // config.headers.test = 'I am only a header!'; // EX: Add jwt token
    // console.log("config",config);

    const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
    config.headers.Authorization = token ? `${token}` : '';

    if (DEBUG) { console.info(`Request: ${fortmatData(config)}`); }

    return config;
}, errorResponseHandler);

// apply interceptor on response
axiosInstance.interceptors.response.use(function (response) {
    if (DEBUG) { console.info(`Response: ${fortmatData(response)}`); }

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, errorResponseHandler);

export const getAPICall = async (url, data) => await axiosInstance.get(url, data);
export const postAPICall = async (url, data) => await axiosInstance.post(url, data);
export const putAPICall = async (url, data) => await axiosInstance.put(url, data);
export const deleteAPICall = async (url, data) => await axiosInstance.delete(url, data);