<template class="home-background">
  <div class="home-container">
    <div class="right-container">
      <div class="image-container">
        <img :src="profile" alt="Imagen 1" class="image-container__photo" />
      </div>
    </div>

    <div class="left-container">
      <div class="left-content">
        <h2 class="aboreto-regular">HI, I´M MICHELLE LABRIN</h2>
        <p class="introduction">
        I am a marketing girl and working life is guiding me step by step through ux/ui design to become a frontend developer.
        </p>
      </div>
      <div class="sub-left-content">
        <p class="subtitle">Frontend Developer | HTML | CSS | JavaScript | Vue3 | UX/UI Designer</p>
      </div>
    </div>
  </div>
  <div>
    <webpractice />
  </div>
</template>

<script setup>
import profile from '/Users/michellelabrin/Desktop/Vue/portfolio-michelle/src/assets/profile.jpeg'
import webpractice from '../webPractice/webpractice.vue'
</script>

<style scoped lang="scss">
@import './home.scss';
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Maven+Pro:wght@400..900&display=swap');
</style>