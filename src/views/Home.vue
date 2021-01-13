<template>
 <a-layout-content
  class="home d-flex align-items-center justify-content-center"
 >
  <Card>
   <template slot="content" slot-scope="{ scope }">
    <router-view
     :date="scope.month"
     :type="scope.type"
    />
   </template>
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
