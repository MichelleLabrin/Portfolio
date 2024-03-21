<template>
  <div class="bakery-container">
    <NavBarCook />
    <div class="home-container">
      <h1 class="home-title">{{ toUpperCase('Sweetest kitchen') }}</h1>
      <h3 class="home-subtitle">{{ toUpperCase('a place to disconnect')}}</h3>
    </div>
  </div>
</template>

<script setup>
import NavBarCook from './navbarcooking/NavBarCook.vue'

const toUpperCase = (text) => {
  return text.toUpperCase();
};

</script>

<style scoped lang="scss">

@import'./BakeryBlog.scss';
</style>