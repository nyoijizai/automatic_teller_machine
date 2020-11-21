/**
 * 一卡通接口
 */

import { base } from '@/api/base';
import request from '@/utils/http';

// 一卡通信息
function information() {
	return request.get(`${base}/api/student/card/card/getCardInformation`);
}

// 一卡通交易类型
function type() {
	return request.get(`${base}/api/student/card/card/getListTransDesc`);
}

// 一卡通交易记录
function cashlog(data) {
	return request.get(`${base}/api/student/card/card/pageCardTransaction`, data);
}

export {
	information as queryUnion,
	type as queryUnionConsumptionType,
	cashlog as queryUnionConsumptionLog,
};
