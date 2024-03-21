<!-- CartView.vue -->
<template>
  <div class="cart-container-shop">
    <h2 class="aboreto-regular">Shopping Cart</h2>
    <ul class="ul-shop">
      <li v-for="cartItem in cart" :key="cartItem.id" class="product-container-shop">
        <img class="card-image-shop" :src="cartItem.image" alt="/" />
        <div class="text-container-shop">
          <h4 class="title-product">
            {{ cartItem.product }} {{ cartItem.quantity }}
          </h4>
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { useStore } from 'vuex';

const store = useStore();
const cart = store.state.cart;
</script>


<style scoped lang="scss">
</style>
