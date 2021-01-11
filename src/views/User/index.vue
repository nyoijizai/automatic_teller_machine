<template>
 <Menu :data="computeMenuConfig" />
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
     identity: 'student',
     icon: 'icon_user_grade',
     path: '/transcript',
     label: '成绩单查询打印',
    },
    {
     identity: 'student',
     icon: 'icon_user_book',
     path: '/education',
     label: '在读证明打印',
    },
    {
     identity: 'student',
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
 // 计算属性
 computed: {
  computeMenuConfig: function() {
   let _user = JSON.parse(localStorage.getItem('User'));
   const _filter = this.menuConfig;

   if (_user.identity === 1) {
    return this.menuConfig.filter((arg) => {
     if (!arg.identity) {
      return arg;
     }
    });
   } else {
    return this.menuConfig;
   }
  },
 },
};
</script>
