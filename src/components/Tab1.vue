<template>
  <div class="container">
    <div class="title-one">{{ titleOne.toUpperCase() }}</div>
    <div class="title-two">{{ titleTwo }}</div>
    <div class="container-star">
      <img v-for="i in 5" :key="i" src="@/assets/estrella.png" alt="/" class="star">
    </div>
  </div>
  <div class="card-container">
    <ComponentTabOne
      v-for="data in allData"
      :title="data.title"
      :key="data.id"
      :data="data"
      :isRadioSelected= "selectedCardIndex === data.title"
      @cardClick="selectCard(data)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentTabOne from './componenttabone/ComponentTabOne.vue';

const allData = [
  {
    id:0,
    categoria: "Hotel",
    isRadioSelected: false,
    title: "Solo Alojamiento",
    services: [
      "Sin régimen",
      "Botella de agua de bienvenida"
    ]
  },
  {
    id:1,
    categoria: "Hotel",
    isRadioSelected: false,
    title: "Alojamiento y Desayuno",
    services: [
      "Desayuno buffet completo"
    ]
  },
  {
    id:2,
    categoria: "Hotel",
    isRadioSelected: false,
    title: "Media Pension",
    services: [
      "Desayuno buffet completo",
      "Cena buffet",
      "No incluye"
    ]
  },
  {
    id:3,
    categoria: "Hotel",
    isRadioSelected: false,
    title: "Todo Incluido",
    services: [
      "Dispondrás de comida y bebida todo el día y durante toda tu estancia.",
      "Restaurante buffet Snack Bar",
      "Servicio de bares (marcas nacionales)"
    ]
  },
  {
    id:4,
    categoria: "Hotel",
    isRadioSelected: false,
    title: "Unlimited Services",
    services: [
      "Restaurante buffet con bebidas Premium",
      "Restaurante a la carta (una cena por estancia)",
      "Snack Bar con bebidas Premium",
      "Minibar incluido",
      "Acceso a SPA y 45 minutos de masaje por persona",
      "Actividades deportivas (acuáticas sin motor)",
      "Caja fuerte",
      "Parking gratuito",
      "Lavandería"
    ]
  },
]

const titleOne = "Hotel"
const titleTwo = "Mieres del Camín Apartamentos"
const selectedCardIndex = ref(null);

const selectCard = (data) => {
  if (selectedCardIndex.value === data.title) {
    console.log("No seleccionado: " + data.title);
    selectedCardIndex.value = null; // Deselecciono mi input si ya está seleccionado
  } else {
    console.log("Seleccionado: " + data.title);
    selectedCardIndex.value = data.title; // Seleccionar el nuevo elemento
  }
};
</script>

<style scoped lang="scss">
@import 'src/components/tabUno/styleTab1.scss';
</style>