/**
 * 一卡通接口
 */

import { base } from "./base";

// 启动
function start(data) {
  /**
   * @param  port  「必填」读卡器端口号。1表示串口;1,2表示串口;2,100表示 USB 读卡器
   * @param  device_band  读卡器波特率。默认为授权文件配置值
   * @param  psam_card_position  PSAM 卡卡槽号。可选值1,2,3,4;默认为授权文件配置值
   */
  return request.post(`${base}/device/open?port=100`, data);
}

// 停用
function end() {
  return request.post(`${base}/device/close`);
}

// 授权
function auth() {
  /**
   * @param  termid  「必填」终端编号
   */
  return request.post(`${base}/auth?termid=410`);
}

// 寻卡
function find() {
  return request.post(`${base}/requestcard`);
}

// 读卡
function fetch(cardID) {
  return request.post(`${base}/readcard/${cardID}`);
}

// 更新
function upgrade(cardID) {
  return request.post(`${base}/writecard/${cardID}`);
}

export {
  start as UnionPowerOn,
  end as UnionPowerOff,
  auth as UnionPowerAuthorization,
  find as UnionFindCard,
  fetch as UnionFetchCard,
  upgrade as UnionUpgradeCard
};
