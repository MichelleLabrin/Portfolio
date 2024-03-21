<template>
  <div class="post-card">
    <h3>Título</h3>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. tem eligendi quidem adipisci facilis amet, accusamus ab harum!</p>
    <PostButton />
    <br/>
    <BasicCounter/>
  </div>
</template>

<script setup>
import PostButton from './PostButton.vue';
import BasicCounter from './BasicCounter.vue';
</script>

<style scoped>
.post-card{
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}

</style>