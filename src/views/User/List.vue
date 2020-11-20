<!-- 个人中心-首页-列表 -->

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
        },
        {
          mode: "QR",
          label: "图书借阅查询",
          icon: "icon_user_library"
        },
        {
          mode: "AP",
          label: "一卡通查询",
          icon: "icon_user_ecard2"
        }
      ]
    };
  }
};
</script>
