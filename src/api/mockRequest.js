// 对axios二次封装 主要用到请求和响应拦截器
import axios from "axios";

import nprogress from "nprogress";
//start进度条开始，done进度条结束

import "nprogress/nprogress.css";

const requests = axios.create({
//配置对象
// 基础路径
  baseURL: '/mock',
  timeout: 5000
});
// 请求拦截器
requests.interceptors.request.use((config)=>{
  //进度条开始动
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use((res)=> {
  //进度条结束
  nprogress.done();
  return res.data;
}, (err) => {
  alert(err.message);
  return new Promise();
})

export default requests;