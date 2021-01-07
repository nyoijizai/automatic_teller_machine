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
     icon: 'icon_user_transcript_file',
     path: '/archive',
     label: '成绩档案表',
    },
    {
     icon: 'icon_user_transcript_original',
     path: '/original',
     label: '成绩单(原始)',
    },
    {
     icon: 'icon_user_transcript_effective',
     path: '/valid',
     label: '成绩单(有效)',
    },
   ],
  };
 },
};
</script>
