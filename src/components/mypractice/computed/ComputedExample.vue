<template>
  <div>
    <input type="text" v-model="message"/>
    <h1>{{message}}</h1>
    <h3>{{reverse}}</h3>
    <input type="number" v-model="subtotal">
    <h3>Ttotal de impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const message=ref('')

const reverse = computed(()=> {
return message.value.split('').reverse().join('');
})

/**/

const vat = 21
const subtotal = ref(0)
const totalVat = computed (()=>{
  return (vat*subtotal.value) / 100
})
</script>

<style scoped>
</style>