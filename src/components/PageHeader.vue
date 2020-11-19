<template>
  <a-page-header class="tzu-page-header" @back="() => null">
    <template slot="backIcon">
      <div class="back-wrapper">
        <a-avatar
          size="small"
          :style="{ marginRight: '4px' }"
          :src="require('@/assets/img/icon/icon_mod_back@2x.png')"
        />
        <span>返回</span>
        <a-avatar
          size="small"
          :style="{ marginRight: '4px' }"
          :src="require('@/assets/img/icon/icon_mod_quit@2x.png')"
        />
        <span>退出</span>
      </div>
    </template>
    <template slot="title">{{ title }}</template>
    <template slot="extra">
      <a-statistic-countdown
        :value="currentDate"
        :valueStyle="{ color: '#fff', fontSize: '18px' }"
        format="MMMM Do YYYY, h:mm:ss a"
      />
    </template>
  </a-page-header>
</template>

<script>
export default {
  name: "tzuPageHeader",
  props: {
    title: String
  },
  data() {
    return { currentDate: new Date().toLocaleString() };
  }
};
</script>
