<template>
  <div class="post-container">
  <PostCardVue/>
  <PostCardVue/>
  <PostCardVue/>
  <PostCardVue/>
  <PostCardVue/>
  </div>
</template>

<script setup>
import PostCardVue from './PostCard.vue';
</script>

<style>
.post-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>