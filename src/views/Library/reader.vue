<template>
 <section class="reader bg-body p-7 h-100 rounded-3">
  <a-descriptions :column="2">
   <a-descriptions-item label="单位名称">
    教务处
   </a-descriptions-item>
   <a-descriptions-item label="读者证号">
    84615874215
   </a-descriptions-item>
   <a-descriptions-item label="读者类型">
    <a-tag color="green">
     学生卡
    </a-tag>
   </a-descriptions-item>
   <a-descriptions-item label="性别">
    女
   </a-descriptions-item>
   <a-descriptions-item label="办证日期">
    2020.12.29
   </a-descriptions-item>
  </a-descriptions>
  <a-divider />
  <a-descriptions :column="2">
   <a-descriptions-item label="已借册数">
    教务处
   </a-descriptions-item>
   <a-descriptions-item label="证件状态">
    84615874215
   </a-descriptions-item>
   <a-descriptions-item label="累借册数">
    <a-tag color="green">
     学生卡
    </a-tag>
   </a-descriptions-item>
   <a-descriptions-item label="违章状态">
    女
   </a-descriptions-item>
   <a-descriptions-item label="欠费金额">
    2020.12.29
   </a-descriptions-item>
   <a-descriptions-item label="限制状态">
    2020.12.29
   </a-descriptions-item>
   <a-descriptions-item label="通用借书证状态">
    2020.12.29
   </a-descriptions-item>
  </a-descriptions>
  <a-divider />
  <a-descriptions :column="1">
   <a-descriptions-item label="说明附注">
    84615874215
   </a-descriptions-item>
  </a-descriptions>
 </section>
</template>

<script>
import { queryReaderInfo } from '@/api/library';
export default {
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryReaderInfo().then((res) => {
    console.log(res);
   });
  },
 },
};
</script>

<style lang="scss" scoped>
.reader {
 overflow-y: auto;
}
</style>
