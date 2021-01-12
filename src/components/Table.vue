<template>
 <section>{{ data }}</section>
</template>

<script>
export default {
 name: 'Table',
 props: {
  data: Array,
 },
 mounted() {
  console.log(data);
 },
};
</script>
