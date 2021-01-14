<template>
 <section class="transcript overflow-y-scroll h-100">
  <a-skeleton active :loading="spinning">
   <!-- 元数据 -->
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
   <!-- 成绩表格 -->
   <div class="table">
    <table class="w-100 fs-8 border text-print-dark" border="1">
     <thead class="text-print-black-50">
      <tr class="text-center">
       <td
        :key="columnIndex"
        :rowspan="column.rowspan"
        :colspan="column.colspan"
        v-for="(column, columnIndex) in tableColumns"
       >
        {{ column.title }}
       </td>
      </tr>
      <tr v-if="renderTableChildColumns.length" class="text-center">
       <td
        :key="childColumnIndex"
        :rowspan="childColumn.rowspan"
        :colspan="childColumn.colspan"
        v-for="(childColumn, childColumnIndex) in renderTableChildColumns"
       >
        {{ childColumn.title }}
       </td>
      </tr>
     </thead>
     <tbody :key="rowIndex" v-for="(row, rowIndex) in tableData">
      <tr :key="spanIndex" v-for="(span, spanIndex) in row.list">
       <td
        :class="column.align ? `text-${column.align}` : 'text-center'"
        :key="columnIndex"
        v-for="(column, columnIndex) in renderTableColumns"
       >
        <span v-if="spanIndex === 0">{{ row[`${column.key}`] }}</span>
        <span>{{ span[`${column.key}`] }}</span>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
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
 computed: {
  renderTableColumns: function() {
   let _arr = Array.from(this.tableColumns);
   const _num = {};

   _arr.filter((arg, sort) => {
    if (Array.isArray(arg.children)) {
     _num.sub = sort;
    }
   });

   _arr.splice(_num.sub, 1, ...this.renderTableChildColumns);

   return _arr;
  },
  renderTableChildColumns: function() {
   let _child = this.tableColumns.filter((arg) => {
    return arg.children;
   });

   if (!!_child[0].children) {
    return _child[0].children;
   }
  },
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
 }
}
</style>
