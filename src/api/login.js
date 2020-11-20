/**
 * 登录接口
 */

import { base } from './base';
import request from '@/utils/http';

// 身份证
function ID(id) {
	return request.post(`${base}/api/platform/base/idCardNoLogin`, id);
}

// 校园卡
function IC(data) {
	return request.post('/api/platform/base/userCodeLogin', data);
}

// 账号密码
function AP(data) {}

// 微信二维码
function QR(data) {}

// 退出登录
function Logout() {
	return request.post('/api/platform/base/logout');
}

export {
	Logout,
	AP as IdentifyAP,
	ID as IdentifyID,
	IC as IdentifyIC,
	QR as IdentifyQR,
};
