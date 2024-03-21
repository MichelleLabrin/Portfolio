<template>
  <div>
    <div class="dropdown-card">
      <div class="header-stay">
        <div class="msg-exclusive">{{ msgExclusive.toUpperCase() }}
        </div>
        <div class="title-stay" @click="toggleCard">
          <img :src="isOpen ? 'src/assets/Rectangle down.png' : 'src/assets/Rectangle up.png'" />
          Mejora tu estancia
        </div>
      </div>
      <div v-if="isOpen">
        <div class="card-stay" v-for="(stay, index) in stayData" :key="stay.title">
          <div>
            <img class="img-stay" :src="stay.image" alt="/" />
          </div>
          <div>
            <h2 class="name-drink">{{ stay.title }}</h2>
            <p class="description-drink">{{ stay.description }}</p>
            <div @click="toggleCardService(index)">
              <span class="food-drink"> {{ stay.moreInfo }} <img
                  :src="stay.isOpen ? 'src/assets/Rectangle down.png' : 'src/assets/Rectangle up.png'" /></span>
            </div>
            <div v-if="stay.isOpen">
              <ul class="list">
                <li class="list-stay" v-for="service in stay.stayServices">{{ service }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="dropdown-card">
      <div class="header-stay">
        <div class="msg-exclusive">{{ msgExclusive.toUpperCase() }}
        </div>

        <div class="title-stay" @click="toggleCardStay">
          <img :src="isOpenTwo ? 'src/assets/Rectangle down.png' : 'src/assets/Rectangle up.png'" />
          Mejora tu estancia
        </div>
        <div v-if="isOpenTwo">
          <div class="card-stay list">Información adicional</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msgExclusive = ref('Exclusivo hotel.com')

const isOpen = ref(false)
const isClose = ref(true)

const isOpenTwo = ref(false)
const isCloseTwo = ref(true)

//Primera card
const toggleCard = () => {
  isOpen.value = !isOpen.value
  isClose.value = !isClose.value
}
//Card con descripcion
const toggleCardService = (index) => {
  stayData.value[index].isOpen = !stayData.value[index].isOpen
  isOpenService.value = !isOpenService.value
  isCloseService.value = !isCloseService.value
}
//Segunda card
const toggleCardStay = () => {
  isOpenTwo.value = !isOpenTwo.value
  isCloseTwo.value = !isClose.value
}

// agregar informacion
const stayData = ref([
  {
    isOpen: false,
    image: "src/assets/meditacion.png",
    title: "Olvídese de la rutina",
    description: "Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.",
    moreInfo: "Más información y condiciones",
    stayServices: [
      "Consulte con mail@generico.com",
    ],
  },
  {
    isOpen: false,
    image: "src/assets/spa.png",
    title: "Experiencias y programas SPA con agua",
    description: "Las experiencias spa de agua tienen una presencia muy especial en SPA Sensations. No es extraño si consideramos que la mayor parte del planeta, así como del propio cuerpo humano, están compuestos de agua. El arte de recrear experiencias de agua en variaciones ilimitadas es la base de la propuesta de SPA Sensations a sus clientes, aportando el refinamiento al baño y a la hidratación en todas sus formas. Un mundo mágico de posibilidades, más allá de la terapia y del que ahora usted, también podrá disfrutar.",
    moreInfo: "Más información y condiciones",
    stayServices: [
      "Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.",
      "Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.",
      "Baño oceánico: con sal marina y gajos de mandarina o lima.",
      "Baño de pies floral: baño aromático de pies, con pétalos y aromas.",
      "Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.",
      "Rain shower.",
    ],
  }
])
</script>
  
<style scoped>
.dropdown-card {
  border: 1px solid #DEE1E8;
  background-color: #ffff;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
}

.msg-exclusive {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.52px;
  text-align: left;
  background-color: #DB171D;
  color: white;
  padding-right: 24px;
  padding-left: 20px;
  margin-left: 1100px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.card-stay {
  display: flex;
  border: 1px solid #DEE1E8;
  background-color: #ffff;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
}

.img-stay {
  margin-right: 20px;
}

.title-stay {
  font-family: 'Roboto Slab';
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  color: #4BA7EE;
  padding-top: 36px;
  padding-left: 60px;
  padding-bottom: 19px;
  
}

.list {
  columns: 3;
  font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #4E5156;
    padding-right: 200px;
}

.list-stay {}

</style>
  