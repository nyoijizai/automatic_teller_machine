<template>
 <a-card
  class="card d-flex flex-column"
  :bordered="false"
  :loading="loading"
  :headStyle="{ flexShrink: 0, marginBottom: 0, borderBottom: 'none' }"
  :bodyStyle="{
   height: '100%',
   display: 'flex',
   flexFlow: 'column nowrap',
   flex: '1 1 auto',
   overflow: 'hidden',
  }"
 >
  <template slot="title">
   <section class="d-flex align-items-center">
    <a-avatar
     class="mr-3"
     :size="67"
     slot="avatar"
     :src="
      user.icon === '' ? require('@/assets/img/user_avatar.png') : user.icon
     "
    />
    <div>
     <div class="title mb-2">
      <span class="text-body">{{ user.userFullName }}</span>
      <span class="ml-3 fw-light text-white-85">{{ user.userCode }}</span>
     </div>
     <div class="fs-6 fw-normal">
      <span class="text-white-85 mr-3">{{ user.unitName }}</span>
      <span class="text-white-85 mr-3">{{ user.majorName }}</span>
      <span class="text-white-85">{{ user.teamsName }}</span>
     </div>
    </div>
   </section>
  </template>
  <template slot="extra">
   <!-- 打印按钮 -->
   <a-button
    v-if="$route.meta.print"
    class="px-7 rounded-pill"
    size="large"
    type="primary"
    @click="handlePrint"
   >
    打印
   </a-button>

   <!-- 筛选一卡通交易记录 -->
   <section
    v-if="$route.meta.filter"
    :class="{ 'd-grid d-grid-2 gap-3': $route.path === '/cashlog' }"
   >
    <a-select
     v-if="$route.path === '/cashlog'"
     :style="{ width: '120px' }"
     placeholder="交易类型"
     @change="handleChangeType"
    >
     <a-select-option
      :key="typeIndex"
      :value="type.label"
      v-for="(type, typeIndex) in tradeTypeOptions"
     >
      {{ type.label }}
     </a-select-option>
    </a-select>
    <a-month-picker
     :locale="locale"
     :style="{ width: '120px' }"
     format="YYYY-MM"
     placeholder="按月查询"
     @change="handleChangeMonth"
    />
   </section>
  </template>
  <slot name="content" :scope="filterForm"></slot>
 </a-card>
</template>

<script>
import { queryEcardTradeType } from '@/api/ecard';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';

export default {
 name: 'Card',
 data() {
  return {
   locale,
   loading: false,
   user: {
    avatar: '@/assets/img/user_avatar.png',
   },
   // 一卡通交易类型
   tradeTypeOptions: [],
   filterForm: {
    type: '',
    month: '',
   },
  };
 },
 mounted() {
  this.user = JSON.parse(localStorage.getItem('User'));
  this.$route.path === '/cashlog' && this.getTradeType();
 },
 // beforeUpdate() {
 //  this.$route.path === '/cashlog' && this.getTradeType();
 // },
 methods: {
  // 获取一卡通交易类型
  getTradeType() {
   queryEcardTradeType().then((res) => {
    this.tradeTypeOptions = res.map((arg) => {
     return {
      label: arg.transDesc,
     };
    });
   });
  },
  // 选择月份
  handleChangeMonth(date, dateString) {
   this.filterForm.month = dateString;
  },
  // 选择交易类型
  handleChangeType(typeString) {
   this.filterForm.type = typeString;
  },
  // 打印指定页面
  handlePrint() {
   window.print();
  },
 },
};
</script>

<style lang="scss" scoped>
/deep/ .ant-select-selection,
/deep/ .ant-calendar-picker-input.ant-input {
 border-radius: 50rem !important;
}
</style>
