<template>
 <section class="table h-100 p-7 rounded-3 bg-body text-dark">
  <!-- 成绩单元数据 -->
  <a-descriptions
   class="d-none d-print-block"
   bordered
   :column="5"
   size="small"
   :colon="true"
   title="泰州学院学生成绩档案表"
  >
   <a-descriptions-item :span="1" label="院（系）/部">
    计算机科学与技术学院
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="培养层次">
    本科
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="学制">
    4 年
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="入学时间">
    2017 年 9 月
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="学号">
    200242150
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="专业">
    计算机科学与技术学院（苏软嵌入）
   </a-descriptions-item>
   <a-descriptions-item :span="2" label="行政班级">
    17 计科（嵌入）3 班
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="毕业时间">
    2021 年 6 月
   </a-descriptions-item>
   <a-descriptions-item :span="1" label="姓名">
    汪东升
   </a-descriptions-item>
  </a-descriptions>
  <!-- 成绩单 -->
  <Table :data="tableData" />
 </section>
</template>

<script>
import { queryTranscriptArchive } from '@/api/transcript';

export default {
 components: {
  Table: () => import('@/components/Table'),
 },
 props: { studentNumber: { type: String, default: '' } },
 // 初始化数据
 data() {
  return {
   userData: {},
   tableData: [],
   // 荣誉层次层级
   hierarchy: {
    1: '国家级',
    2: '省部级',
    3: '市厅级',
    4: '校级',
    5: '院级',
   },
  };
 },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryTranscriptArchive(this.studentNumber).then((res) => {
    console.log(res);
    this.userData = res.studentInfoVO;
    this.tableData = res.studentScoreArchives;
   });
  },
 },
};
</script>
