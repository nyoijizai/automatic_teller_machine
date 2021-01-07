import { http } from '@/api/utils/request';
import { unionServer } from '@/api/utils/base';

// 启动一卡通读卡器
function turnOn() {
 /**
  * @param  port  「必填」读卡器端口号。1表示串口;1,2表示串口;2,100表示 USB 读卡器
  * @param  device_band  读卡器波特率。默认为授权文件配置值
  * @param  psam_card_position  PSAM 卡卡槽号。可选值1,2,3,4;默认为授权文件配置值
  */
 return http.post(`${unionServer}/device/open?port=100`);
}

// 关闭一卡通读卡器
function turnOff() {
 return http.post(`${unionServer}/device/close`);
}

// 注册一卡通读卡器授权
function authorization() {
 /**
  * @param  termid  「必填」终端编号
  */
 return http.post(`${unionServer}/auth?termid=410`);
}

// 一卡通读卡器寻找卡片
function find(key) {
 return http.post(`${unionServer}/requestcard?session_key=${key}`);
}

// 一卡通读卡器读取卡片数据
function fetch(key, cardId) {
 return http.post(
  `${unionServer}/readcard/${cardId}?session_key=${key}&fields=CF_STUEMPNO`
 );
}

export {
 turnOn as unionTurnOn,
 turnOff as unionTurnOff,
 authorization as unionSignIn,
 find as unionFindCard,
 fetch as unionFetchCard,
};
