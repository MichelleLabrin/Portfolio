<template>
  <div class="caja-informativa">
    <div class="title-alojamiento">{{ data.title }}</div>
    <div class="line"></div>
    <ul class="listado">
      <li v-for="(service) in data.services">{{ service }}</li>
    </ul>
    <label class="regimen">
      <input 
      type="radio" 
      :checked="isRadioSelected" 
      @click="toggleInput" 
      class="radio-input"
      :name="data.categoria"
      />
      Elegir régimen 
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emits = defineEmits(['cardClick']);
const isRadioSelected = ref(false);
//pasar texto a una variable y llamarlo 

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isRadioSelected: Boolean,
  index: Number,
  title: String,
  key: Number,
});

/* Ciclo de vida Hooks
onBeforeMount(() => {
//console.log("onBeforeMount", props.data);
// Marca si coincide con el índice seleccionado
});
*/

const toggleInput = () => {
  emits('cardClick', props.data.id);
  isRadioSelected.value = !isRadioSelected.value; 
}
</script>

<style scoped>
.caja-informativa {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 225px;
  left: 21px;
  border: 1px solid #326C96;
  background-color: #ffffff;
}

.title-alojamiento {
  color: #105AA3;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10%;
}

.line {
  border-top: 1px solid #C9E3F9;
  margin: 15px 0;
  width: 72px;
  height: 3px;
  top: 177px;
  left: 98px;
}

.listado {
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 4px;
  color: #001841;
  max-width: 175px;
}

ul li::before {
  color: #9DA2A9;
}

.regimen {
  background-color: #F9F9FB;
  margin-top: auto;
  color: #616469;
  width: 191px;
  height: 46px;
  margin-bottom: 16px;
}

input {
  margin-top: 8%;
  margin-left: 8%;
}

.radio-input {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #8B9199;
  border-radius: 50%;
}

.radio-input:checked {
  width: 16px;
  height: 16px;
  background-color: #6DC138;
  border: 2px solid white;
  outline: 2px solid #6DC138;
}

/** 
-webkit-appearance: none y appearance: none elimino los estilos predeterminados del radio-input

outline: establecer el estilo del contorno de un elemento. Un contorno es una línea que se dibuja al rededor de elementos, fuera de los límites del borde, para resaltar un elemento.

*/
</style>

