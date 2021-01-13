<template>
 <section class="transcript overflow-y-scroll h-100 rounded-3 bg-body">
  <a-skeleton active :loading="spinning">
   <a-descriptions
    class="d-none d-print-block"
    :column="10"
    size="small"
    :colon="true"
    :title="title"
   >
    <!-- 成绩档案元数据 -->
    <template v-if="type === 'archive'">
     <a-descriptions-item :span="3" label="院（系）/部">
      {{
       userScope.departmentName ? `${userScope.departmentName}` : '暂无数据'
      }}
     </a-descriptions-item>
     <a-descriptions-item :span="2" label="培养层次">
      {{ userScope.trainingLevel ? `${userScope.trainingLevel}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="1" label="学制">
      {{ userScope.yearsStudy ? `${userScope.yearsStudy}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="2" label="入学时间">
      {{ userScope.forecastTime ? `${userScope.forecastTime}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="2" label="学号">
      {{ userScope.studentNumber ? `${userScope.studentNumber}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="专业">
      {{ userScope.majorName ? `${userScope.majorName}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="行政班级">
      {{ userScope.teamsName ? `${userScope.teamsName}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="2" label="毕业时间">
      {{ userScope.graduateTime ? `${userScope.graduateTime}` : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="2" label="姓名">
      {{ userScope.name ? `${userScope.name}` : '暂无数据' }}
     </a-descriptions-item>
    </template>
    <!-- 成绩单元数据 -->
    <template v-else>
     <a-descriptions-item class="p-0" :span="4" label="院（系）/部">
      {{ userScope.unitName ? userScope.unitName : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="专业">
      {{ userScope.majorName ? userScope.majorName : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="班级">
      {{ userScope.teamsName ? userScope.teamsName : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="4" label="学号">
      {{ userScope.userCode ? userScope.userCode : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="姓名">
      {{ userScope.userFullName ? userScope.userFullName : '暂无数据' }}
     </a-descriptions-item>
     <a-descriptions-item :span="3" label="性别">
      {{ userScope.sex ? (userScope.sex === 1 ? '男' : '女') : '暂无数据' }}
     </a-descriptions-item>
    </template>
   </a-descriptions>

   <a-empty
    class="h-100 d-flex d-print-none flex-column align-items-center justify-content-center"
   >
    <span class="text-black-50" slot="description">
     暂无数据
    </span>
   </a-empty>
   <!-- 成绩单 -->
  </a-skeleton>
 </section>
</template>

<script>
export default {
 name: 'Table',
 props: {
  title: {
   type: String,
   default: '',
  },
  type: {
   type: String,
   default: '',
  },
  spinning: Boolean,
  'user-scope': Object,
  'table-data': Array,
  'table-columns': Array,
 },
};
</script>

<style lang="scss" scoped>
/deep/ .ant-descriptions-title {
 text-align: center;
 margin-bottom: 0;
}

/deep/ .ant-descriptions-item {
 line-height: 1;
 overflow: hidden;
 white-space: nowrap;
 padding: 0 !important;

 > * {
  font-size: 12px;

  // &:last-child {
  //  max-width: 100px;
  //  white-space: pre-wrap;
  // }
 }
}
</style>
