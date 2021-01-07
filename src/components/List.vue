<template>
 <a-list
  size="large"
  class="list h-100 bg-body p-7 rounded-3 text-dark"
  item-layout="horizontal"
  :data-source="data"
 >
  <a-list-item class="py-5" slot="renderItem" slot-scope="item, index">
   <a-list-item-meta>
    <a-avatar
     v-if="type !== 'award'"
     slot="avatar"
     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
    <span class="fs-5 mb-0 text-dark" slot="title">{{ item.title }}</span>
    <div slot="description">
     <small class="d-block mb-2">{{ item.level }}</small>
     <p class="fs-6 mb-0 text-muted">{{ item.date }}</p>
    </div>
   </a-list-item-meta>
   <a-button
    size="large"
    type="primary"
    @click="$router.push({ path: '/award', query: { ...item } })"
   >
    打印证明
   </a-button>
  </a-list-item>
 </a-list>
</template>

<script>
export default {
 name: 'List',
 props: {
  data: Array,
  type: {
   type: String,
   default: '',
  },
 },
};
</script>

<style lang="scss" scoped>
.list {
 overflow-y: scroll;
}
</style>
