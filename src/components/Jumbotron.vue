<template>
 <a-spin :delay="800" :spinning="spinning">
  <article
   class="jumbotron d-print-block h-100 bg-body p-7 rounded-3 text-dark"
  >
   <h1 class="mb-7 text-center">{{ title }}</h1>
   <!-- 学籍证明 -->
   <p v-if="type === 'education'">
    学生
    <ins>{{ user.name ? user.name : '暂无信息' }}</ins>
    （学号
    <ins>{{ user.studentNumber ? user.studentNumber : '暂无信息' }}</ins>
    ），性别
    <ins>{{ user.sex ? user.sex : '暂无信息' }}</ins>
    ，籍贯
    <ins>{{ user.nativePlace ? user.nativePlace : '暂无信息' }}</ins>
    ，身份证号码
    <ins>{{ user.cardId ? user.cardId : '暂无信息' }}</ins>
    。
    <ins>{{ user.forecastTime ? user.forecastTime : '暂无信息' }}</ins>
    年
    <ins>9</ins>
    月起就读于泰州学院
    <ins>
     {{ user.departmentName ? user.departmentName : '暂无信息' }}
    </ins>
    学院
    <ins>{{ user.majorName ? user.majorName : '暂无信息' }}</ins>
    专业，学制
    <ins>{{ user.yearsStudy ? user.yearsStudy : '暂无信息' }}</ins>
    年，层次
    <ins>{{ user.trainingLevel ? user.trainingLevel : '暂无信息' }}</ins>
    。
   </p>
   <!-- 结束 学籍证明 -->

   <!-- 荣誉证明 -->
   <p v-else>
    现有我校
    <ins>{{ user.unitName }}</ins>
    学院
    <ins>{{ user.majorName }}</ins>
    专业
    <ins>{{ user.teamsName }}</ins>
    学生
    <ins>{{ user.userFullName }}</ins>
    （学号
    <ins>{{ user.userCode }}</ins>
    ），身份证号码
    <ins>{{ user.idCardNo }}</ins>
    。于
    <ins>{{ $route.query.date }}</ins>
    荣获
    <ins>{{ $route.query.title }}</ins>
    。
   </p>
   <!-- 结束 荣誉证明 -->

   <p>特此证明。</p>
   <div class="mt-7 text-right">
    <p class="mb-0">泰州学院教务处</p>
    <p class="mb-0">{{ fetchDate }}</p>
   </div>
  </article>
 </a-spin>
</template>

<script>
import moment from 'moment';
import { IdentifyEducation } from '@/api/certificate';

export default {
 name: 'Jumbotron',
 props: {
  title: {
   type: String,
   default: '',
  },
  type: {
   type: String,
   default: '',
  },
 },
 // 计算属性
 computed: {
  fetchDate: function() {
   return moment().format('YYYY 年 MM 月 DD 日');
  },
 },
 // 初始化数据
 data() {
  return { spinning: false, user: JSON.parse(localStorage.getItem('User')) };
 },
 // 挂载实例前执行
 mounted() {
  this.type === 'education' && this.queryEducation();
 },
 methods: {
  // 获取学籍
  queryEducation() {
   this.spinning = !this.spinning;
   IdentifyEducation().then((res) => {
    this.user = res;
    this.spinning = !this.spinning;
   });
  },
 },
};
</script>

<style lang="scss" scoped>
.jumbotron {
 p {
  text-indent: 2em;
  line-height: 1.8;
 }

 ins {
  padding: 0 0.5rem;
  text-decoration: none;
  border-bottom: 1px solid #333333;
 }
}
</style>
