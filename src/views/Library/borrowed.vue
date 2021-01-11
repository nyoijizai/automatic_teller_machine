<template>
 <List type="reader" :loading="loading" :data="listData" />
</template>

<script>
import { queryReaderRecord } from '@/api/library';

export default {
 components: {
  List: () => import('@/components/List'),
 },
 props: { date: { type: String, default: '' } },
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
   this.pagination.date = value;
   this.getData();
  },
 },
 // beforeUpdate() {
 //  console.log(this.monthPicker);
 // },
 // 挂载实例时执行
 mounted() {
  this.getData();
 },
 methods: {
  getData() {
   queryReaderRecord(
    this.pagination.size,
    this.pagination.current,
    this.pagination.date
   ).then((res) => {
    this.listData = res.records;
    this.pagination.size = res.size;
    this.pagination.current = res.current;
    this.loading = false;
   });
  },
 },
};
</script>
