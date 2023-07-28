<template>
<div v-if="posts.length > 0">
  <h3>Список пользователей</h3>
  <transition-group name="post-list">
    <post-item
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove', post)"/>
  </transition-group>
</div>
<h2 v-else style="color: red">
Список пользователей пуст
</h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};

</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-move {
  transition: transform 0.8s ease;
}

</style>
