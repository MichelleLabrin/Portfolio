<template>
  <h1>PostList</h1>
  <div class="container">
    <PostHijoVue 
    v-for="post in info" 
    :key="post.title" 
    :title="post.title" 
    :content="post.content"
    @sayHi="showAlert"
    />
  </div>
</template>

<script setup>
import PostHijoVue from './PostHijo.vue';
/* interface Post {
  title: String,
  content: String,
}*/

const info = [
  {
    title: 'Title por Props de Padre a Hijo',
    content: 'Texto de ejemplo 1'
  },
  {
    title: 'Title por Props de Padre a Hijo',
    content: 'Texto de ejemplo 2'
  },
  {
    title: 'Title por Props de Padre a Hijo',
    content: 'Texto de ejemplo 3'
  },
  {
    title: 'Title por Props de Padre a Hijo',
    content: 'Texto de ejemplo 4'
  }
]

function showAlert(msg){
  alert(msg)
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>