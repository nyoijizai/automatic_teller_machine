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
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '课程/环节',
     dataIndex: 'courseLink',
     key: 'courseLink',
     rowspan: 2,
     colspan: 1,
     align: 'left',
    },
    {
     title: '类别',
     dataIndex: 'category',
     key: 'category',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '学分',
     dataIndex: 'courseCredit',
     key: 'courseCredit',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '考核方式',
     dataIndex: 'evaluationMethod',
     key: 'evaluationMethod',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '修读性质',
     dataIndex: 'courseCharacter',
     key: 'courseCharacter',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '平时成绩',
     dataIndex: 'peacetimeGrade',
     key: 'peacetimeGrade',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '中考成绩',
     dataIndex: 'middleGrade',
     key: 'middleGrade',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '末考成绩',
     dataIndex: 'finalGrade',
     key: 'finalGrade',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '技能',
     rowspan: 1,
     colspan: 2,
     children: [
      {
       title: '类别',
       dataIndex: 'skillCategory',
       key: 'skillCategory',
       rowspan: 1,
       colspan: 1,
      },
      {
       title: '成绩',
       dataIndex: 'skillGrade',
       key: 'skillGrade',
       rowspan: 1,
       colspan: 1,
      },
     ],
    },

    {
     title: '综合成绩',
     dataIndex: 'synthesizeGrade',
     key: 'synthesizeGrade',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '辅修标记',
     dataIndex: 'minorSign',
     key: 'minorSign',
     rowspan: 2,
     colspan: 1,
    },
    {
     title: '备注',
     dataIndex: 'remark',
     key: 'remark',
     rowspan: 2,
     colspan: 1,
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
   queryTranscript({ type: 2, studentNumber: _user.userCode }).then((res) => {
    this.loading = !this.loading;
    this.tableData = res;
   });
  },
 },
};
</script>
