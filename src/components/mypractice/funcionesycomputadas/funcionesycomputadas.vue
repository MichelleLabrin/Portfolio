<template>
  <!-- Ejercicio del King -->
  <div class="container">
      <h2>Cena {{ contador + 1 }} con el rey {{ rey }}</h2>
      <h3 class="precio">Precio {{ productos[contador].precio }}$</h3>
      <div v-if="productos[contador].finDeSemana" class="soloFinesDeSemana dias">(Solo fines de semana)</div>
      <div v-else class="dias todosLosDias ">(De lunes a domingo)</div>

      <div v-if="productos[contador].precio < 100" class="oferta">
          <div>
              Ahora un 10% dto:
              {{ nuevoPrecio }}$
          </div>
          <img src="/Users/michellelabrin/Desktop/Vue/portfolio-michelle/src/assets/oferta.jpg" />
      </div>

      <img :src="imagen" alt="/" />
      <button @:click="siguiente" class="king-button"> Siguiente ({{ contador + 1 }}/{{ total }})</button>
  </div>

  <div class="btn-back-container">
    <button class="btn-back" @click="navigateBack('/extra')"> Back to extra</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { productos } from './extradatos.js'

const router= useRouter();

// ejercicio del King
const contador = ref(0)
const total = productos.length;
const ruta = "https://www.html6.es/img/rey_";

const siguiente = () => {
  contador.value++
  if (contador.value >= total) {
      contador.value = 0;
  }
}
const rey = computed(() => {
  const kingName = productos[contador.value].nombre.toLowerCase()
  return kingName.substring(0, 1).toUpperCase() +
      // solo selecciono la primera letra para convertirla en mayus
      kingName.substring(1)
  // aqui cogo el resto de letras y como arriba las puse en minus ya deja a partir del 1 todas en minus

  //buscar la funcion capital algo y modificarlo !!!
})
const imagen = computed(() => {
  return `${ruta}${productos[contador.value].nombre.toLowerCase()}.png`
  // com hay combinacion de variale y string es mejor `` y $ (para identificar variables)
  // esto no es recomendable imagenes con rutas dinamicas!!
})
const nuevoPrecio = computed(() => {
  return Number(productos[contador.value].precio / 1.10).toFixed(2)
})
// (6) el v-if es = a true, se puede poner pero se sobre entiende que se iguala a true la condicion.
// (21) El .value nunca va en template solo en script y lo uso porque quiero acceder al valor de la constante
//(27) El computed tiene que tener siempre RETURN

const navigateBack = ((route)=> {
  router.push(route);
});

</script>

<style scoped>
/* Ejercicio del King*/
.container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
}
h2, h3 {
  margin: 10px 0;
}
.king-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d4d4d4;
  color: #000000;
  border: none;
  border-radius: 5px;
}
.todosLosDias {
  background-color: green;
}
.soloFinesDeSemana {
  background-color: red;
}
.dias {
  display: inline-block;
  color: white;
  padding: 4px 17px;
  font-size: 0.9em;
  border-radius: 4px;
  margin: 5px 0 10px;
}
.oferta {
  border: 2px solid red;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
}
.oferta img {
  width: 65px;
}
.btn-back {
    background-color: #fdba00;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
}
.btn-back-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
@media (min-width: 768px) {
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      padding: 20px;
      margin-left: 300px;
      margin-right: 300px;
      text-align: center;
  }
}
</style>
