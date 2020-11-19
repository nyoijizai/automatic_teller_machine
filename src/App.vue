<template>
  <a-layout class="tzu-layout">
    <a-layout-content class="tzu-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  components: {
    tzuCard: () => import("@/components/Card"),
    tzuPageHeader: () => import("@/components/PageHeader")
  }
};
</script>
