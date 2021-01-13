<template>
 <Table
  title="泰州学院学生成绩[有效]"
  :loading="loading"
  :user-scope="userData"
 />
</template>

<script>
import { queryTranscript } from '@/api/transcript';

export default {
 components: {
  Table: () => import('@/components/Table'),
 },
 // 初始化数据
 data() {
  return {
   userData: {},
   tableData: [],
   loading: true,
  };
 },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   let _user = JSON.parse(localStorage.getItem('User'));

   this.userData = _user;
   queryTranscript({ type: 2, studentNumber: _user.userCode }).then((res) => {
    this.loading = !this.loading;
    console.log(res);
    // if (typeof res === 'object') {
    //  this.userData = res.studentInfoVO;
    //  this.tableData = res.studentScoreArchives;
    // } else {
    //  this.$message.error(res.msg);
    // }
   });
  },
 },
};
</script>
