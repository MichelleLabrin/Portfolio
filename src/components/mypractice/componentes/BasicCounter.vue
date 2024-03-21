<template>
  <div class="basic-counter">
    <div>
      <button @click="addCounter" class="mas-btn">Más</button>
    </div>
    <div class="number-counter" :style="{color: counterColor}">
      <span>{{ counter }}</span>
    </div>
    <div>
      <button @click="restCounter" class="menos-btn">Menos</button>
    </div>
  </div>

  <div>
    <p :style="{backgroundColor : '#fcfbde', color: otherColor}"> Color Change</p>
    <button @click="handleClick()"> Change Color Here!</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const counter = ref(0)
const otherColor = ref('#6e020d')

const addCounter = () => {
  counter.value++
}
const restCounter = () => {
  counter.value--
}
const counterColor = computed (()=>{
  if (counter.value < 0){
    return 'red'
  } else if (counter.value > 0){
    return 'green'
  } else {
    return 'black'
  }
})

const handleClick = () => {
  otherColor.value = '#000000'
}
</script>

<style>
.basic-counter{
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.number-counter{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}
.mas-btn{
  background-color: rgb(120, 202, 250);
  border:0px;
  padding: 10px;
  color: white;
  border: 0px;
  outline: 0;
  border-radius: 7px;
}
.menos-btn{
  background-color: #fa7878;
  border:0px;
  padding: 10px;
  color: white;
  border: 0px;
  outline: 0;
  border-radius: 7px;
}
</style>