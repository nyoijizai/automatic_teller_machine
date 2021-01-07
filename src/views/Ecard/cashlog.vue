<template>
 <List type="bill" :data="listData" />
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
   queryEcardBill().then((res) => {
    this.listData = res;
    // this.listData = res.studentAward.map((arg) => {
    //  return {
    //   date: arg.yearName,
    //   title: arg.levelName,
    //   level: this.hierarchy[arg.level],
    //  };
    // });
   });
  },
 },
};
</script>
