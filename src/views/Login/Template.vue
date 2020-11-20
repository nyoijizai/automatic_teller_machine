<template>
  <div class="login tzu-card">
    <template v-if="mode.mode !== 'AP'">
      <a-avatar
        :size="140"
        shape="square"
        :src="require(`@/assets/img/icon/${mode.icon}@2x.png`)"
      />
      <span class="item-label">{{ mode.label }}</span>
    </template>
    <template v-else>
      <h1>测试</h1>
    </template>
  </div>
</template>

<script>
// 必需
import { IdentifyAP, IdentifyID, IdentifyIC, IdentifyQR } from "@/api/login";
import {
  UnionPowerOn,
  UnionPowerOff,
  UnionFindCard,
  UnionFetchCard,
  UnionUpgradeCard,
  UnionPowerAuthorization
} from "@/api/device";

export default {
  beforeCreate() {
    const _mode = this.$route.params.verify;

    switch (_mode) {
      case "ID":
        // 启用身份证读卡器
        console.log(1);
        break;
      case "IC":
        // 启用校园卡读卡器
        UnionPowerOn(res => {
          if (res.retcode == 0) {
            // 启用成功,设备授权
            UnionPowerAuthorization(res => {
              if (res.retcode == 0) {
                // 授权成功,寻找卡片
                UnionFindCard(res => {
                  // 没有找到卡片
                  if (res.retcode == 99) {
                  } else {
                    // 找到卡片，读取卡片
                    UnionFetchCard(res => {
                      // 卡片读取失败
                      if (res.retcode == 99) {
                      } else {
                        // 卡片读取成功，登录账号
                      }
                    });
                  }
                });
              }
            });
          }
        });
        break;
      // case 'AP':
      // 	console.log(3);
      // 	break;
      // case 'QR':
      // 	console.log(4);
      // 	break;
    }
  },
  created() {
    this.menuConfig.map(arg => {
      if (arg.mode === this.$route.params.verify) {
        return (this.mode = arg);
      }
    });
  },

  data() {
    return {
      mode: {},
      menuConfig: [
        {
          mode: "ID",
          label: "请将证件放置在身份证扫描区",
          icon: "icon_login_verify_card"
        },
        {
          mode: "IC",
          label: "请将校园卡放置在左侧读卡器",
          icon: "icon_login_verify_card"
        },
        {
          mode: "AP",
          label: "账号密码登录",
          icon: "icon_login_password"
        },
        {
          mode: "QR",
          label: "请使用微信扫描上方二维码登录",
          icon: "icon_login_verify_qrCode"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 854px / 1280px * 100%;
  height: 425px / 1024px * 100%;

  .item {
    &-label {
      margin-top: 40px;
    }
  }
}
</style>
