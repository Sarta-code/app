// 引入axios
import axios from "axios";
// 引入进度条nprogress
import nprogress from 'nprogress';
import store from "@/store";
import '../../node_modules/nprogress/nprogress.css';
const requests = axios.create({
    baseURL: '/api',
    timeout: 3000
});

// 添加请求拦截器
requests.interceptors.request.use(
    (config) => {
        // 在发送请求之前做一些处理

        // 再发送请求的之前展示进度条
        nprogress.start();
        if (store.state.detail.uuid_token) {
            //请求头添加一个字段(userTempId):和后台老师商量好了
            config.headers.userTempId = store.state.detail.uuid_token;
        }
        return config;
    },
    (error) => {
        // 对请求失败做一些处理
        return Promise.reject(error);
    });


// 添加响应拦截器
requests.interceptors.response.use(
    (response) => {
        // 请求响应成功的数据做处理

        // 响应数据后关掉进度条
        nprogress.done();
        return response.data;
    },
    (error) => {
        alert('响应数据错误' + error.response.request.status);
        return Promise.reject(error);
    });
// 暴露axios
export default requests;