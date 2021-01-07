<template>
 <a-layout-content
  class="d-flex align-items-center justify-content-center"
 >
  <router-view />
 </a-layout-content>
</template>

<script>
// import { queryUserInfo } from '@/api/login';
// export default {
//  methods: {
//   handleClick() {
//    let number = '321284200208301428';
// 
//    queryUserInfo(number).then((res) => {
//     this.$store.commit('Login', res);
//     this.$router.push({ path: '/' });
//    });
//   },
//  },
// };
</script>
