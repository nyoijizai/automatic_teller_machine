<!-- 成绩单 首页 -->

<template>
  <div class="tzu-card-body tzu-row-grid tzu-row-grid-3">
    <router-link
      :to="{ name: 'Template', params: { verify: item.mode } }"
      :key="index"
      class="item"
      v-for="(item, index) in menuConfig"
    >
      <div class="wrap">
        <a-avatar
          :size="76"
          shape="square"
          :src="require(`@/assets/img/icon/${item.icon}@2x.png`)"
        />
        <span class="item-label">{{ item.label }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuConfig: [
        {
          mode: "ID",
          label: "成绩单查询打印",
          icon: "icon_user_grade"
        },
        {
          mode: "IC",
          label: "在读证明打印",
          icon: "icon_user_postgraduate"
        },
        {
          mode: "AP",
          label: "获奖证明打印",
          icon: "icon_user_glory"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.user {
  padding: 50px 100px;
  width: 960px / 1280px * 100%;
  height: 744px / 1024px * 100%;

  &-title,
  &-description {
    text-align: left;
    color: @text-color;

    span {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  &-title {
    span {
      &:first-child {
        font-size: 22px;
      }

      &:last-child {
      }
    }
  }
}

.ant-list-item-meta-content {
  display: flex;
  align-self: stretch;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
