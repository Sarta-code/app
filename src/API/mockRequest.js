import axios from "axios";
import nprogress from "nprogress";
import '../../node_modules/nprogress/nprogress.css';
const mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000
});

mockRequests.interceptors.request.use(
    (config) => {
        nprogress.start();
        // 请求之前做的事
        return config;
    },
    (error) => {
        // 请求失败做的事
        return Promise.reject(error);
    });

mockRequests.interceptors.response.use(
    (response) => {
        // 响应之前做的事
        nprogress.done();
        return response.data;
    },
    (error) => {
        // 响应失败做的事
        return Promise.reject(error);
    }

);

export default mockRequests;