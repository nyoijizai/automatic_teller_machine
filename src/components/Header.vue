<template>
 <a-layout-header class="d-print-none">
  <a-row>
   <a-col :span="8">
    <a-button
     v-if="$route.path !== '/' && $route.path !== '/login'"
     ghost
     type="link"
     @click="$router.go(-1)"
    >
     <a-avatar
      class="mr-1"
      :size="28"
      :style="{ verticalAlign: '-0.4em' }"
      :src="require('@/assets/img/icon/icon_back.svg')"
     ></a-avatar>
     返回
    </a-button>
    <a-popconfirm
     v-if="$store.state.hasLogin"
     class="mr-5"
     placement="bottomLeft"
     :ok-text="`退出（${offlineTime} 秒）`"
     cancel-text="取消"
     @confirm="handleLogOut"
    >
     <template slot="title">
      <p>是否确认退出？</p>
      <small>此操作将清空当前设备的浏览记录，并将您的账号登出</small>
     </template>
     <a-button ghost type="link" @click="handleTimer(offlineTime)">
      <a-avatar
       class="mr-1"
       :size="28"
       :style="{ verticalAlign: '-0.4em' }"
       :src="require('@/assets/img/icon/icon_quit.svg')"
      ></a-avatar>
      退出
     </a-button>
    </a-popconfirm>
   </a-col>
   <a-col :span="8" class="text-center">{{ $route.meta.title }}</a-col>
   <a-col :span="8" class="text-right">
    <a-popconfirm
     v-if="$store.state.hasLogin"
     class="mr-5"
     placement="bottom"
     ok-text="立即退出（180 秒）"
     cancel-text="我知道了"
     @confirm="handleLogOut"
    >
     <template slot="title">
      <p>您的登录状态将被重置</p>
      <small>
       为了确保您的个人信息安全，如果您登录后 3 分钟内一直未执行操作
       <br />
       我们将强制清空当前设备的浏览记录，并将您的账号登出
      </small>
     </template>
     <a-button ghost type="link" @click="handleTimer">
      <a-avatar
       :size="20"
       class="mr-2"
       :style="{ verticalAlign: '-0.2em' }"
       :src="require('@/assets/img/icon/icon_online.svg')"
      ></a-avatar>
      {{ $store.state.hasLogin ? '在线' : '离线' }}
     </a-button>
    </a-popconfirm>
    <span>{{ currentTime }}</span>
   </a-col>
  </a-row>
 </a-layout-header>
</template>

<script>
import moment from 'moment';
export default {
 name: 'Header',
 data() {
  return {
   offlineTime: 30,
   onlineTime: 180,
   currentTime: moment().format('YYYY 年 MM 月 DD 日 HH:mm:ss'),
  };
 },
 mounted() {
  // 初始化报时
  this.handleTimeChime();
 },
 methods: {
  // 登出
  handleLogOut() {
   this.$store.commit('Logout');
   this.$router.push({ path: '/login' });
  },
  // 报时
  handleTimeChime() {
   setTimeout(() => {
    this.currentTime = moment().format('YYYY 年 MM 月 DD 日 HH:mm:ss');
    this.handleTimeChime();
   }, 1000);
  },
  // 倒计时
  handleTimer(time) {},
 },
};
</script>
