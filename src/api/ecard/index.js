import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 一卡通卡片信息
function info() {
 return http.get(`${base}/student/card/card/getCardInformation`);
}

// 一卡通卡片交易类型
function type() {
 return http.get(`${base}/student/card/card/getListTransDesc`);
}

// 一卡通卡片交易记录
function bill(data) {
 return http.get(`${base}/student/card/card/pageCardTransaction`, {
  params: data,
 });
}

export {
 info as queryEcardInfo,
 bill as queryEcardBill,
 type as queryEcardTradeType,
};
