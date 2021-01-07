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
     icon: 'icon_user_grade',
     path: '/transcript',
     label: '成绩单查询打印',
    },
    {
     icon: 'icon_user_book',
     path: '/education',
     label: '在读证明打印',
    },
    {
     icon: 'icon_user_glory',
     path: '/awards',
     label: '获奖证明打印',
    },
    {
     icon: 'icon_user_library',
     path: '/library',
     label: '图书借阅查询',
    },
    {
     icon: 'icon_user_ecard',
     path: '/ecard',
     label: '一卡通查询',
    },
   ],
  };
 },
};
</script>