// 此模块完成api接口统一管理
// 引入分装后的axios就是requests
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口地址
// /product/getBaseCategoryList get 无参数
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
export const reqBannerList = () => mockRequests({ url: '/banner', method: 'get' });
export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' });
export const reqSearchList = (params) => requests({ url: '/list', method: 'post', data: params });
export const reqDetailList = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
export const reqAddOrUpdateShopcart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });
export const reqShopcartList = () => requests({ url: '/cart/cartList', method: 'get' });