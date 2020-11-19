<template>
  <tzu-card :user="userData" :span="3"></tzu-card>
</template>

<script>
export default {
  components: {
    tzuCard: () => import("@/components/Card")
  },
  data() {
    return {
      userData: [
        {
          name: "马保国",
          id: 498452846,
          class: "17 计科（嵌入）2 班",
          department: "计算机科学与技术学院",
          specialty: "计算机科学与技术（苏软嵌入）"
        }
      ]
    };
  }
};
</script>
