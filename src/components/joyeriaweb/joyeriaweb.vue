<template>
  <div>
    <div class="jewelry-container">
      <div>
        <p class="title-handmade aboreto-regular">HANDMADE ART</p>
      </div>
      <div class="content-container">
        <div>
          <div>
            <h1 class="title-jewerly">YOUR STYLE, YOUR ATTITUDE,</h1>
            <h1 class="subtitle-jewerly herr-von-muellerhoff-regular">
              Your Life
            </h1>
          </div>
          <div>
            <h2 class="description-jewerly aboreto-regular">
              You don't choose your items, they choose you <br>to wear them
            </h2>
          </div>
        </div>
        <div class="btn-container">
          <button @click="goToJoyeriaShop" class="btn-shop aboreto-regular">SHOP!</button>
        </div>
      </div>
    </div>
    <joyeriashop ref="joyeriashopRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import joyeriashop from '/Users/michellelabrin/Desktop/Vue/portfolio-michelle/src/components/joyeriaweb/joyeriashop/joyeriashop.vue'

const joyeriashopRef = ref()

const goToJoyeriaShop = () => {
  const element = document.getElementById("joyeriashopElement");
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped lang="scss">

@import './joyeriaweb.scss';
</style>
