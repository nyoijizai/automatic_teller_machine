<template>
 <List type="bill" :loading="loading" :data="listData" />
</template>

<script>
import { queryEcardBill } from '@/api/ecard';

export default {
 components: {
  List: () => import('@/components/List'),
 },
 // 初始化数据
 data() {
  return {
   listData: [],
   loading: true,
   // 分页
   pagination: {
    size: 20,
    current: 0,
   },
  };
 },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryEcardBill().then((res) => {
    this.listData = res.records;
    this.pagination.size = res.size;
    this.pagination.current = res.current;
    this.loading = false;
   });
  },
 },
};
</script>
