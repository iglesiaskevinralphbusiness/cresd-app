import axios from 'axios';
import { API_URL, PAGE_URL } from '../utils/constant/index';
import { useHistory } from "react-router-dom";

const axiosConfig = {
    baseURL: API_URL,
    timeout: 20000,
    headers: {},
};

export const HTTP = axios.create(axiosConfig);

// request interceptor
HTTP.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
);

// response interceptor
HTTP.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error && !error.response) {
            HTTP.request(error.config);
        } else {
            const { status } = error.response;
            if (status === 401) {
                console.log('You are not autorize to access this page!');
            } else if (status === 404) {
                console.log('404 Api request not found!');
            }

            return Promise.reject(error.response);
        }
    }
);
