import axios from 'axios';
import { message } from 'ant-design-vue';

// 创建实例
const instance = axios.create({
 baseURL: '',
 timeout: 8888,
 headers: {
  'Content-Type': 'application/json',
  clientType: 'pc',
 },
});

// 请求拦截器
instance.interceptors.request.use(
 function(config) {
  let _token = localStorage.getItem('Token');

  !!_token && (config.headers.token = localStorage.getItem('Token'));

  // 全局配置提示
  message.config({
   maxCount: 1,
  });

  return config;
 },
 function(error) {
  return Promise.reject(error);
 }
);

// 响应拦截器
instance.interceptors.response.use(
 function(response) {
  // console.log(response);
  if (response.data.code === 200 || response.status === 200) {
   return response.data.data || response.data;
  } else {
   message.error(response.data.data || response.data.msg);
  }
 },
 function(error) {
  message.error('当前服务异常，请稍候再试');
  return error;
 }
);

export { instance as http };
