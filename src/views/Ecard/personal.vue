<template>
 <section class="bg-body p-7 h-100 rounded-3">
  <a-skeleton active :loading="loading">
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
       :value="userData.balance"
       :value-style="{ color: '#61a6ff' }"
      >
       <template #suffix>
        <span>元</span>
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
      <a-statistic title="卡状态" :value-style="{ color: '#ff4d4f' }">
       <template #formatter>
        {{ userData.status ? cardStatus[userData.status] : '暂无数据' }}
       </template>
      </a-statistic>
     </a-card>
    </a-col>
   </a-row>
  </a-skeleton>
  <a-skeleton active :loading="loading">
   <a-descriptions class="pt-7" :column="2">
    <a-descriptions-item label="学工号">
     {{ userData.stuEmpNo ? userData.stuEmpNo : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="卡号">
     {{ userData.cardNo ? userData.cardNo : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="卡类型">
     {{ userData.cardTypeName ? userData.cardTypeName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="用户类型">
     {{ userData.custTypeName ? userData.custTypeName : '暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
  </a-skeleton>
 </section>
</template>

<script>
import { queryEcardInfo } from '@/api/ecard';
export default {
 data() {
  return {
   loading: true,
   userData: {},
   cardStatus: {
    1: '正常',
    2: '注销',
    3: '坏卡',
    4: '锁卡',
    5: '冻结',
    6: '挂失',
   },
  };
 },
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryEcardInfo().then((res) => {
    this.userData = res;
    this.loading = false;
   });
  },
 },
};
</script>
