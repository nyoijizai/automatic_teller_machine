<template>
 <a-layout-content
  class="home d-flex align-items-center justify-content-center"
 >
  <Card>
   <router-view />
  </Card>
 </a-layout-content>
</template>

<script>
export default {
 components: {
  Card: () => import('@/components/Card'),
 },
};
</script>
