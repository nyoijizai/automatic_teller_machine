<template>
  <div class="login">
    <router-link
      :to="{ name: 'Template', params: { verify: item.mode } }"
      :key="index"
      class="item tzu-card"
      v-for="(item, index) in menuConfig"
    >
      <a-avatar
        :size="76"
        shape="square"
        :src="require(`@/assets/img/icon/${item.icon}@2x.png`)"
      />
      <span class="item-label">{{ item.label }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchLoginMode: true,
      menuConfig: [
        {
          mode: "ID",
          label: "身份证登录",
          icon: "icon_login_idcard"
        },
        {
          mode: "IC",
          label: "校园卡登录",
          icon: "icon_login_ecard"
        },
        {
          mode: "AP",
          label: "账号密码登录",
          icon: "icon_login_password"
        },
        {
          mode: "QR",
          label: "微信二维码登录",
          icon: "icon_login_qrcode"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.login {
  display: grid;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  width: 540px / 1280px * 100%;
  height: 540px / 1024px * 100%;
  grid-template-columns: repeat(2, 1fr);

  .item {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    &-label {
      margin-top: 24px;
    }
  }
}
</style>
