import { ecardServer } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 图书借阅卡片信息
function info() {
 return http.get(
  `${ecardServer}/student/data/platform/book/borrow/reader/information`
 );
}

// 一卡通卡片交易记录
function bill(data) {
 return http.get(`${ecardServer}/student/card/card/pageCardTransaction`, data);
}

export {
 info as queryReaderInfo,
 bill as queryEcardBill,
};
