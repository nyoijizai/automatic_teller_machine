<template>
 <section class="bg-body p-7 h-100 rounded-3">
  <a-row :gutter="20">
   <a-col :span="12">
    <a-card
     class="rounded-3"
     :bordered="false"
     :bodyStyle="{
      borderRadius: '0.5rem',
      backgroundColor: 'rgb(33 33 33 / 5%)',
     }"
    >
     <a-statistic
      title="账户余额"
      :value="895.58"
      :value-style="{ color: '#61a6ff' }"
     >
      <template #prefix>
       <a-icon class="fs-6" type="pay-circle" />
      </template>
     </a-statistic>
    </a-card>
   </a-col>
   <a-col :span="12">
    <a-card
     class="rounded-3"
     :bordered="false"
     :bodyStyle="{
      borderRadius: '0.5rem',
      backgroundColor: 'rgb(33 33 33 / 5%)',
     }"
    >
     <a-statistic title="卡状态" :value-style="{ color: '#52c41a' }">
      <template #formatter>
       正常
      </template>
     </a-statistic>
    </a-card>
   </a-col>
  </a-row>
  <a-descriptions class="pt-7" :column="1">
   <a-descriptions-item label="学工号">
    84615874215
   </a-descriptions-item>
   <a-descriptions-item label="卡号">
    1810000000
   </a-descriptions-item>
   <a-descriptions-item label="卡类型">
    <a-tag color="green">
     学生卡
    </a-tag>
   </a-descriptions-item>
   <a-descriptions-item label="用户类型">
    <a-tag color="pink">
     本科生
    </a-tag>
   </a-descriptions-item>
  </a-descriptions>
 </section>
</template>

<script>
import { queryEcardInfo } from '@/api/ecard';
export default {
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryEcardInfo().then((res) => {
    console.log(res);
   });
  },
 },
};
</script>
