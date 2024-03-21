<template>
  <div>
    <h1 class="title-practiceweb">WEB DESIGN PRACTICE</h1>
    <div class="square-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="square"
        @click="navigateToUrl(image.url)"
        @mouseover="setHover(true, index)"
        @mouseout="setHover(false, index)"
      >
        <img :src="image.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  { src: 'src/assets/handmade2.png', url: '/jewerlyweb' },
  { src: 'src/assets/deco2.png', url: '/haguedeco' },
  { src: 'src/assets/cook.png', url: '/bakeryblog' },
];

const hover = ref(Array(images.length).fill(false));

const navigateToUrl = (url) => {
  window.location.href = url;
};

const setHover = (value, index) => {
  hover[index] = value;
};
</script>

<style scoped lang="scss">
@import './webpractice.scss';
</style>
