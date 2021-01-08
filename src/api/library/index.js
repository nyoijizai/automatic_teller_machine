import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 图书借阅卡片信息
function info() {
 return http.get(
  `${base}/student/data/platform/book/borrow/reader/information`
 );
}

// 图书借阅记录
function record(size, current, date) {
 return http.get(
  `${base}/student/data/platform/book/borrow/record?size=${size}&current=${current}&date=${date}`
 );
}

export { info as queryReaderInfo, record as queryReaderRecord };
