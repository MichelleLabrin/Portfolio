<template>
  <div class="global-container">
    <div class="header-container">
      <router-link to="/cart">
      <img class="basket-icon" src="/Users/michellelabrin/Desktop/Vue/portfolio-michelle/src/assets/shopping-cart.png" alt="Basket Icon" />
      <span class="total-quantity"> {{ totalQuantity }} </span>
    </router-link>
    </div>
    <ul class="card-container">
      <li
        v-for="jewelryItem in jewelryList"
        :key="jewelryItem.id"
        class="product-container"
      >
        <img class="card-image" :src="jewelryItem.image" alt="/" />
        <div class="text-container">
          <h4 class="title-product">
            {{ jewelryItem.product }}
          </h4>
          <p class="title-description">
            {{ jewelryItem.description }}
          </p>
          <p class="title-price"> {{ jewelryItem.price }}</p>
          <button class="button-jewerly" @click="addToCart(jewelryItem)">
            Add to cart
          </button>
        </div>
      </li>
    </ul>

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
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const jewelryList = ref([])
const cart = ref([])

const fetchData = async () => {
  try {
    const response = await fetch(
      'https://64807077f061e6ec4d494adb.mockapi.io/jewerly'
    )
    const data = await response.json()
    jewelryList.value = data.map(item => ({ ...item, quantity: 0 }))
  } catch (error) {
    console.log(error, 'error')
  }
}

const addToCart = (jewelryItem) => {
  const existingItemIndex = cart.value.findIndex(item => item.id === jewelryItem.id)

  if (existingItemIndex !== -1) {
    // Increment quantity if item is already in the cart
    cart.value[existingItemIndex].quantity++
  } else {
    // Add item to cart with quantity 1 if not in the cart
    cart.value.push({ ...jewelryItem, quantity: 1 })
  }
};

const totalQuantity = computed(() => {
  return cart.value.reduce((total,item) => total + item.quantity, 0)
});

onMounted(fetchData)
</script>

<style scoped lang="scss">
@import './joyeriacard.scss';
</style>
