import { http } from '@/api/utils/request';
import { cardServer } from '@/api/utils/base';

// 启动身份证读卡器
function turnOn() {
 /**
  * @param  port  「必填」读卡器端口号。1表示串口;1,2表示串口;2,100表示 USB 读卡器
  * @param  device_band  读卡器波特率。默认为授权文件配置值
  * @param  psam_card_position  PSAM 卡卡槽号。可选值1,2,3,4;默认为授权文件配置值
  */
 return http.post(`${cardServer}/device/open?port=100`);
}

// 关闭身份证读卡器
function turnOff() {
 return http.post(`${cardServer}/device/close`);
}

// 注册身份证读卡器授权
function authorization() {
 /**
  * @param  termid  「必填」终端编号
  */
 return http.post(`${cardServer}/auth?termid=410`);
}

// 身份证读卡器寻找卡片
function find(key) {
 return http.post(`${cardServer}/requestcard?session_key=${key}`);
}

// 身份证读卡器读取卡片数据
function fetch(key, cardId) {
 return http.post(
  `${cardServer}/readcard/${cardId}?session_key=${key}&fields=CF_STUEMPNO`
 );
}

export {
 turnOn as IDCardTurnOn,
 turnOff as IDCardTurnOff,
 authorization as IDCardSignIn,
 find as IDCardFindCard,
 fetch as IDCardFetchCard,
};
