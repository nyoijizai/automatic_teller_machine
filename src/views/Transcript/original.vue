<template>
 <Table
  title="泰州学院学生成绩[原始]"
  :loading="loading"
  :user-scope="userData"
  :table-data="tableData"
  :table-columns="tableColumns"
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
   tableColumns: [
    {
     title: '学年学期',
     dataIndex: 'schoolYearSemester',
     key: 'schoolYearSemester',
     fixed: 'left',
    },
    {
     title: '课程/环节',
     dataIndex: 'courseLink',
     key: 'courseLink',
     fixed: 'left',
    },
    {
     title: '类别',
     dataIndex: 'category',
     key: 'category',
    },
    {
     title: '学分',
     dataIndex: 'courseCredit',
     key: 'courseCredit',
    },
    {
     title: '考核方式',
     dataIndex: 'evaluationMethod',
     key: 'evaluationMethod',
    },
    {
     title: '修读性质',
     dataIndex: 'courseCharacter',
     key: 'courseCharacter',
    },
    {
     title: '平时成绩',
     dataIndex: 'peacetimeGrade',
     key: 'peacetimeGrade',
    },
    {
     title: '中考成绩',
     dataIndex: 'middleGrade',
     key: 'middleGrade',
    },
    {
     title: '末考成绩',
     dataIndex: 'finalGrade',
     key: 'finalGrade',
    },
    {
     title: '技能',
     children: [
      {
       title: '类别',
       dataIndex: 'skillCategory',
       key: 'skillCategory',
      },
      {
       title: '成绩',
       dataIndex: 'skillGrade',
       key: 'skillGrade',
      },
     ],
    },

    {
     title: '综合成绩',
     dataIndex: 'synthesizeGrade',
     key: 'synthesizeGrade',
    },
    {
     title: '辅修标记',
     dataIndex: 'minorSign',
     key: 'minorSign',
    },
    {
     title: '备注',
     dataIndex: 'remark',
     key: 'remark',
    },
   ],
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
   queryTranscript({ type: 1, studentNumber: _user.userCode }).then((res) => {
    this.loading = !this.loading;
    this.tableData = res;
    console.log(res);
    // if (typeof res === 'object') {
    //  this.tableData = res.studentScoreArchives;
    // } else {
    //  this.$message.error(res.msg);
    // }
   });
  },
 },
};
</script>
