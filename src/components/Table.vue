<template>
 <section class="table overflow-scroll h-100 p-7 rounded-3 bg-body text-dark">
  <a-skeleton active :loading="spinning">
   <!-- 成绩单元数据 -->
   <a-descriptions
    class="d-none d-print-block"
    v-if="type !== 'archive'"
    :column="3"
    size="small"
    :colon="true"
    :title="title"
   >
    <a-descriptions-item class="p-0" :span="1" label="院（系）/部">
     {{ userScope.unitName ? userScope.unitName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="专业">
     {{ userScope.majorName ? userScope.majorName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="班级">
     {{ userScope.teamsName ? userScope.teamsName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="学号">
     {{ userScope.userCode ? userScope.userCode : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="姓名">
     {{ userScope.userFullName ? userScope.userFullName : '暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="性别">
     {{ userScope.sex ? (userScope.sex === 1 ? '男' : '女') : '暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
   <!-- 成绩档案元数据 -->
   <a-descriptions
    v-else
    class="table-meta d-none d-print-block"
    bordered
    :column="5"
    size="small"
    :colon="true"
    :title="title"
   >
    <a-descriptions-item :span="1" label="院（系）/部">
     {{
      userScope.departmentName ? `:${userScope.departmentName}` : ':暂无数据'
     }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="培养层次">
     {{ userScope.trainingLevel ? `:${userScope.trainingLevel}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="学制">
     {{ userScope.yearsStudy ? `:${userScope.yearsStudy}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="入学时间">
     {{ userScope.forecastTime ? `:${userScope.forecastTime}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="学号">
     {{ userScope.studentNumber ? `:${userScope.studentNumber}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="专业">
     {{ userScope.majorName ? `:${userScope.majorName}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="2" label="行政班级">
     {{ userScope.teamsName ? `:${userScope.teamsName}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="毕业时间">
     {{ userScope.graduateTime ? `:${userScope.graduateTime}` : ':暂无数据' }}
    </a-descriptions-item>
    <a-descriptions-item :span="1" label="姓名">
     {{ userScope.name ? `:${userScope.name}` : ':暂无数据' }}
    </a-descriptions-item>
   </a-descriptions>
   <!-- 成绩单 -->
  </a-skeleton>
  <a-table
   bordered
   :columns="tableColumns"
   :data-source="tableData"
   :scroll="{ x: 1500, y: 342 }"
   :pagination="false"
  />
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
