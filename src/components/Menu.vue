<template>
 <section
  class="menu d-grid gap-4 flex-fill"
  :class="[theme === 'dark' ? 'menu-dark' : 'menu-light', `d-grid-${span}`]"
 >
  <router-link
   class="item d-flex flex-column align-items-center justify-content-center rounded-3"
  :class="theme === 'dark' ? '' : ' bg-body text-dark'"
   :to="item.path"
   :key="itemIndex"
   v-for="(item, itemIndex) in data"
  >
   <a-avatar
    class="mb-5"
    :size="60"
    shape="square"
    :src="require(`@/assets/img/icon/${item.icon}.png`)"
   />
   {{ item.label }}
  </router-link>
 </section>
</template>

<script>
export default {
 name: 'Menu',
 props: {
  data: Array,
  span: {
   type: Number,
   default: 3,
  },
  theme: {
   type: String,
   default: 'light',
  },
 },
};
</script>