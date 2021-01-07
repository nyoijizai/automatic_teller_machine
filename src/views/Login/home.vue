<template>
 <section class="d-flex w-45 h-75">
  <Menu theme="dark" :span="2" :data="menuConfig" />
 </section>
</template>

<script>
export default {
 components: {
  Menu: () => import('@/components/Menu'),
 },
 data() {
  return {
   menuConfig: [
    {
     icon: 'icon_login_idcard',
     path: '/login/idCard',
     label: '身份证登录',
    },
    {
     icon: 'icon_login_ecard',
     path: '/login/unionCard',
     label: '校园卡登录',
    },
    {
     icon: 'icon_login_password',
     path: '/login/account',
     label: '账号密码登录',
    },
    {
     icon: 'icon_login_qrcode',
     path: '/login/qrCode',
     label: '微信二维码登录',
    },
   ],
  };
 },
};
</script>
