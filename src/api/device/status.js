import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 当前设备状态
function status(data) {
 return http.post(`${base}/platform/printer/checkPrint`, data);
}

export { status as deviceStatus };
