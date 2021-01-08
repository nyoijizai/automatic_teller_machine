<template>
 <section
  class="menu menu-dark w-75 h-50"
 >
  <div id="wechat" class="item w-100 h-100 rounded-3"></div>
 </section>
</template>

<script>
import '@/assets/js/wxLogin.js';
export default {
 mounted() {
  this.$nextTick(function() {
   this.getData();
  });
 },
 methods: {
  getData() {
   var obj = new WxLogin({
    id: 'wechat',
    self_redirect: true,
    scope: 'snsapi_login',
    appid: 'wxcd5315c3da003f8d',
    redirect_uri:
     'https://authserver.tzu.edu.cn//weixin/callback?service=http://localhost:8080',
    state: '',
    style: 'white',
    href: '',
   });
  },
 },
};
</script>

<style lang="scss" scoped>
iframe {
 width: 100% !important;
 height: 100% !important;
}
</style>
