//API接口进行统一管理
import requests from "./request.js";
import mockRequests from './mockRequest';

// 三级联动的接口
export const reqCategoryList = ()=> {
  return requests({url: '/product/getBaseCategoryList', method: 'get'});
}

//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');
//获取floor
export const reqFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据
export const reqGetSearchInfo = ( params ) => requests({url:"/list", method: "post", data: params});

//获取产品详情信息接口
export const reqGoodsInfo = (skuid) => requests({url:`/item/${skuid}`, method:'get'})
