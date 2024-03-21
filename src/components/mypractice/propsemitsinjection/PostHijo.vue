<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <input type="text" v-model="mensajeHijo">
    <button @click="handleClick">Di hola</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const { title, content } = defineProps({
  title: String,
  content: String,
});
const emits = defineEmits (["sayHi"])
const mensajeHijo = ref("")

const handleClick = () => {
  emits("sayHi", mensajeHijo.value)
}
</script>

<style scoped>
.post{
  width: 300px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}
</style>