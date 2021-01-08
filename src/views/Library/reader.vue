<template>
 <section class="reader bg-body p-7 h-100 rounded-3">
  <a-skeleton active :loading="loading">
   <a-descriptions :column="2">
    <a-descriptions-item label="单位名称">
     {{ userData.unitName ? userData.unitName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="读者证号">
     {{ userData.readerCardNo ? userData.readerCardNo : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="读者类型">
     {{ userData.readerType ? userData.readerType : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="性别">
     {{ userData.sex ? userData.sex : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="办证日期">
     {{ userData.certificateDate ? userData.certificateDate : '暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
  </a-skeleton>
  <a-divider />
  <a-skeleton active :loading="loading">
   <a-descriptions :column="2">
    <a-descriptions-item label="已借册数">
     {{ userData.borrowed ? userData.borrowed : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="证件状态">
     {{ userData.certificateStatus ? userData.certificateStatus : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="累借册数">
     {{ userData.borrowedTotal ? userData.borrowedTotal : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="违章状态">
     {{ userData.violationStatus ? userData.violationStatus : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="欠费金额">
     {{ userData.amountOverdue ? userData.amountOverdue : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="限制状态">
     {{ userData.restrictStatus ? userData.restrictStatus : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item label="通用借书证状态">
     {{ userData.generalStatus ? userData.generalStatus : '暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
   <a-divider />
   <a-descriptions :column="1">
    <a-descriptions-item label="说明附注">
     {{ userData.description ? userData.description : '暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
  </a-skeleton>
 </section>
</template>

<script>
import { queryReaderInfo } from '@/api/library';
export default {
 // 初始化数据
 data() {
  return { loading: false, userData: {} };
 },
 // 挂载实例前执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   this.loading = true;
   queryReaderInfo().then((res) => {
    this.loading = false;
    !!res.code ? this.$message.error(res.msg) : (this.userData = res);
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
