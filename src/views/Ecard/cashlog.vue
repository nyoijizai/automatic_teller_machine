<template>
 <List type="bill" :loading="loading" :data="listData" />
</template>

<script>
import { queryEcardBill } from '@/api/ecard';

export default {
 components: {
  List: () => import('@/components/List'),
 },
 props: {
  date: { type: String, default: '' },
  type: { type: String, default: '' },
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
 watch: {
  date: function(value) {
   this.pagination.transDate = value.replace('-', '');
   this.getData();
  },
  type: function(value) {
   this.pagination.transDesc = value;
   this.getData();
  },
 },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryEcardBill(this.pagination).then((res) => {
    this.listData = res.records;
    this.pagination.size = res.size;
    this.pagination.current = res.current;
    this.loading = false;
   });
  },
 },
};
</script>
