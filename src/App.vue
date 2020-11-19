<template>
  <a-layout class="tzu-layout">
    <a-layout-content class="tzu-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
  import {IdentifyID} from "@/api/login"
export default {
  components: {
    tzuCard: () => import("@/components/Card"),
    tzuPageHeader: () => import("@/components/PageHeader")
  },
  created() {
    IdentifyID().then(res=> {
      console.log(res)
    })
  }
};
</script>
