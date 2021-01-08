<template>
 <a-list
  size="large"
  class="list h-100 bg-body p-7 rounded-3 text-dark"
  item-layout="horizontal"
  :data-source="data"
 >
  <a-list-item
   v-if="type === 'reader'"
   class="py-5"
   slot="renderItem"
   slot-scope="item, index"
  >
   <a-skeleton active :loading="loading">
    <a-list-item-meta>
     <span class="fs-4 mb-0 text-dark" slot="title">
      &#8968;{{ item.title }}&#8971;
     </span>
     <div slot="description">
      <small class="d-block mb-2">
       {{ item.bookNo }}
       <a-divider type="vertical" />
       {{ item.callNo }}
      </small>
      <a-descriptions size="small" :column="2">
       <a-descriptions-item label="借书日期">
        {{ item.borrowBookDate ? item.borrowBookDate : '暂无数据' }}
       </a-descriptions-item>
       <a-descriptions-item label="是否续借">
        {{ item.renewState ? item.renewState : '暂无数据' }}
       </a-descriptions-item>
       <a-descriptions-item label="应还日期">
        {{ item.shouldReturnDate ? item.shouldReturnDate : '暂无数据' }}
       </a-descriptions-item>
       <a-descriptions-item label="续借日期">
        {{ item.renewDate ? item.renewDate : '暂无数据' }}
       </a-descriptions-item>
       <a-descriptions-item label="还书日期">
        {{ item.returnBookDate ? item.returnBookDate : '暂无数据' }}
       </a-descriptions-item>
      </a-descriptions>
      <p class="fs-6 mb-0 text-muted">{{ item.date }}</p>
     </div>
    </a-list-item-meta>
   </a-skeleton>
  </a-list-item>
  <a-list-item
   v-else-if="type === 'bill'"
   class="py-5"
   slot="renderItem"
   slot-scope="item, index"
  >
   <a-skeleton active :loading="loading">
    <a-list-item-meta>
     <span class="fs-4 mb-0 text-dark" slot="title">{{ item.amount }}元</span>
     <div slot="description">
      <small class="d-block mb-2">
       {{ item.teamName ? item.teamName : '暂无数据' }}
      </small>
      <p class="fs-6 mb-0 text-muted">
       {{ item.transDate ? item.transDate : '暂无数据' }}
      </p>
      <p class="fs-6 mb-0 text-muted">
       {{
        item.transDesc
         ? `${item.transDesc}&nbsp;&#8212;&nbsp;`
         : '暂无数据&nbsp;&#8212;&nbsp;'
       }}{{ item.shopName ? item.shopName : '暂无数据' }}
      </p>
     </div>
    </a-list-item-meta>
   </a-skeleton>
  </a-list-item>
  <a-list-item v-else class="py-5" slot="renderItem" slot-scope="item, index">
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
  loading: {
   type: Boolean,
   default: true,
  },
 },
};
</script>

<style lang="scss" scoped>
.list {
 overflow-y: scroll;
}
</style>
