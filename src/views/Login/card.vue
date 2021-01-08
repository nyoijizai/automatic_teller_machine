<template>
 <section class="menu menu-dark w-75 h-50">
  <div
   class="item w-100 h-100 rounded-3  d-flex flex-column align-items-center justify-content-center"
  >
   <a-avatar
    class="mb-7"
    :size="160"
    shape="square"
    :src="require('@/assets/img/icon/icon_login_card.png')"
   />
   <span>请在读卡器上刷卡验证身份</span>
  </div>
 </section>
</template>

<script>
import {
 unionTurnOn,
 unionTurnOff,
 unionSignIn,
 unionFindCard,
 unionFetchCard,
} from '@/api/device/ecard';
import { queryUserInfo } from '@/api/login';

export default {
 mounted() {
  this.powerOn();
 },
 methods: {
  // 启动设备
  powerOn() {
   unionTurnOn().then((turnOnRes) => {
    if (turnOnRes.retcode == 0) {
     unionSignIn().then((signInRes) => {
      if (signInRes.retcode == 0) {
       let _key = signInRes.session_key;

       this.findCard(_key);
      }
     });
    }
   });
  },
  // 寻找卡片
  findCard(key) {
   let _timer = setInterval(() => {
    if (this.$route.path === '/login/unionCard') {
     this.$message.loading('请将卡片放置在读卡器上', 2).then(() => {
      unionFindCard(key).then((findRes) => {
       console.log(this.$route.path);
       if ('cardphyid' in findRes) {
        console.log(1, this.$route.param);
        this.$message.loading('读卡中', 3).then(() => {
         unionFetchCard(key, findRes.cardphyid).then((fetchRes) => {
          if ('CF_STUEMPNO' in fetchRes) {
           clearInterval(_timer);
           this.$message.success('读卡成功');
           this.login(fetchRes.CF_STUEMPNO);
          }
         });
        });
       } else {
        return false;
       }
      });
     });
    } else {
     clearInterval(_timer);
     return false;
    }
   }, 6000);
  },
  // 登录
  login(id) {
   queryUserInfo(id).then((res) => {
    if (res.code === 200) {
     this.$message.success('登录成功');
     this.$store.commit('Login', res.data);
     this.$router.push({ path: '/' });
    } else {
     this.$message.error(res.msg);
    }
   });
  },
 },
};
</script>
