<template>
 <Table
  type="archive"
  title="泰州学院学生成绩档案表"
  :spinning="spinning"
  :user-scope="userData"
  :table-data="tableData"
  :table-columns="tableColumns"
 />
</template>

<script>
import { queryTranscriptArchive } from '@/api/transcript';

export default {
 components: {
  Table: () => import('@/components/Table'),
 },
 // 初始化数据
 data() {
  return {
   userData: {},
   tableData: [],
   spinning: true,
   // 表格配置项
   tableColumns: [
    { title: '课程/环节', dataIndex: 'courseLink', key: 'courseLink' },
    { title: '类别', dataIndex: 'category', key: 'category' },
    { title: '学分', dataIndex: 'credit', key: 'credit' },
    { title: '成绩', dataIndex: 'grade', key: 'grade' },
    { title: '学分绩点', dataIndex: 'creditPoint', key: 'creditPoint' },
   ],
  };
 },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   let _user = JSON.parse(localStorage.getItem('User'));

   queryTranscriptArchive(_user.userCode).then((res) => {
    this.spinning = !this.spinning;

    if (typeof res === 'object') {
     this.userData = res.studentInfoVO;
     this.tableData = res.studentScoreArchives;
    } else {
     this.$message.error(res.msg);
    }
   });
  },
 },
};
</script>
