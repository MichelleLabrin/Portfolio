<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="jewelry-container">
    <div class="content-container">
      <h2 class="description-jewerly aboreto-regular">
        They choose you to wear them
      </h2>
      <joyeriacard />
    </div>
  </div>
</template>

<script setup>
import joyeriacard from '/src/components/joyeriaweb/joyeriashop/joyeriacard.vue'

// const store = useStore();
// const jewerly = computed(() => store.state.jewerly)
// console.log(jewerly, 'dos')
//const jewerlyList = ref([]);

// const fetchJewerly = async () => {
//   try {
//     await store.dispatch('jewerly/requestJewerlyApi');
//     jewerlyList.value = store.state.jewerly;
//   } catch (error) {
//     console.error('Error fetching Jewerly', error);
//   }
// };

// onMounted(fetchJewerly);
</script>

<style scoped lang="scss">
@import './joyeriashop.scss';
</style>
