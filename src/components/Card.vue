<template>
  <section class="tzu-card user">
    <div class="tzu-card-header">
      <a-list :data-source="user">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta>
            <div class="user-title" slot="title">
              <span>{{ item.name }}</span>
              <span>{{ item.id }}</span>
            </div>
            <a-avatar
              :size="67"
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <div class="user-description" slot="description">
              <span>{{ item.department }}</span>
              <span>{{ item.specialty }}</span>
              <span>{{ item.class }}</span>
            </div>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div
      class="tzu-card-body"
      :class="span !== 0 ? 'tzu-row-grid tzu-row-grid-' + span : ''"
    >
      {{ span }}
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "tzuCard",
  props: {
    user: {
      type: Array,
      default: () => {
        return [];
      }
    },
    span: {
      type: Number,
      default: 0
    }
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

<style lang="less" scoped>
.user {
  padding: 50px 100px;
  width: 960px / 1280px * 100%;
  height: 744px / 1024px * 100%;

  &-title,
  &-description {
    text-align: left;
    color: @text-color;

    span {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  &-title {
    span {
      &:first-child {
        font-size: 22px;
      }

      &:last-child {
      }
    }
  }
}

.ant-list-item-meta-content {
  display: flex;
  align-self: stretch;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
