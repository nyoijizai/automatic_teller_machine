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
     icon: 'icon_ecard_seek',
     path: '/personal',
     label: '一卡通信息查询',
    },
    {
     icon: 'icon_ecard_record',
     path: '/cashlog',
     label: '一卡通消费记录',
    },
   ],
  };
 },
};
</script>
