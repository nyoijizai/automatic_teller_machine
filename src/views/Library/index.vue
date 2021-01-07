<template>
 <Menu :data="menuConfig" />
</template>

<script>
export default {
 components: {
  Menu: () => import('@/components/Menu'),
 },
 data() {
  return {
   menuConfig: [
    {
     icon: 'icon_library_seek',
     path: 'reader',
     label: '借阅证信息查询',
    },
    {
     icon: 'icon_library_record',
     path: 'borrowed',
     label: '借阅记录',
    },
   ],
  };
 },
};
</script>
