import axios from 'axios';
// import { base } from "@/api/base";
// import store from "@/store";
// import { removeStorage } from "@/utils/session";

// create an axios instance
const request = axios.create({
	baseURL: '', // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	// timeout: 10000, // request timeout
	timeout: 1000000,
	headers: {
		'Content-Type': 'application/json',
		clientType: 'pc',
	},
});

// request interceptor
// 请求拦截
request.interceptors.request.use(
	(config) => {
		config.headers['clientType'] = 'pc';
		let token = localStorage.getItem('Token');
		// let token = "76cde0f606c34b3aa9438013d71a3f4f";
		if (token) {
			config.headers['token'] = token;
		} else {
		}
		return config;
	},
	(error) => {
		// do something with request error
		// http://1493ew3958.iask.in/
		//
		// 老師：18888880018 / 019729
		// 學生：18888880080 / 019810
		// console.log(error); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
// 响应拦截
request.interceptors.response.use(
	(response) => {
		const res = response.data;
		if (res.code === 2000) {
			// 未登录
			// 删除本地存储的token & user
			localStorage.removeItem('Token');
			localStorage.removeItem('User');
			// 存储当前页面，用于登录成功后重定向到当前页
			let refer = window.location.href;
			localStorage.setItem('Refer', refer);
			// window.location.href = '/login';
			// 用于OAuth2回调获取code的资源地址
			let redirectUri = window.location.origin + '/oAuth2Grant';
			axios
				.post(`${base}platform/base/login/url`, { redirectUrl: redirectUri })
				.then((res) => {
					// OAuth2登录授权页
					let authUrl = res.data.data;
					window.location.href = authUrl;
				});
			// ---- code 2000 立刻删除token ,不跳转登录页面,直接跳首页. --zhangjinjian
			return;
		}
		//下载文件
		if (res.code === undefined) {
			return response;
		}
		if (res.timestamp) {
			localStorage.setItem('timestamp', res.timestamp);
		}
		// 200 成功返回码， 501 需要提升错误码
		if (res.code === 501) {
			return res;
		}
		if (res.code !== 200) {
			console.log(res.msg || '操作失败');
			return Promise.reject(new Error(res || 'Error'));
		} else {
			return res.data;
		}
	},
	(error) => {
		console.log(error); // for debug
		if (error && error.response && error.response.status === 401) {
			console.log('error');
		} else {
			console.log(error.message || '操作失败');
		}
		return Promise.reject(error);
	}
);

export default request;
