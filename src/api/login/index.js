import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 身份证号码登录
function loginByID(ID) {
 let data = new FormData();
 data.append('idCardNo', ID);

 return http.post(`${base}/platform/base/idCardNoLogin`, data);
}

// 账号密码登录
function loginByAccount(form) {
 return http.post(`${base}/platform/base/app/login`, form);
}

// 账号密码登录后回调
function loginByAccountCallBack(link) {
 return http.get(`${base}/${link}`);
}

// 获取打印机状态
function checkPrintState(form) {
 return http.post(`${base}/platform/printer/checkPrint`, form);
}

export {
 loginByID as queryUserInfo,
 loginByAccount as queryUserAuth,
 loginByAccountCallBack as queryUserAuthCallBack,
 checkPrintState as checkPrintState,
};
