<template>
 <a-layout class="app h-100">
  <Header />
  <router-view />
  <Footer />
 </a-layout>
</template>

<script>
export default {
 components: {
  Header: () => import('@/components/Header'),
  Footer: () => import('@/components/Footer'),
 },
};
</script>
