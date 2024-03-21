// // import { defineStore } from 'pinia';
// //import la funcion que exporto en mi service para aqui recoger la info.
// import { dataapi } from 'src/service/dataapi.ts';


// const response = dataapi.fetchBeerApi()

// export const useBeerStore = defineStore({
//   id: "BeerStore",
//   state: () => ({ // Aquí defino mi estado inicial
//     beers: [], //aquí guardaría la info recibida
//   }),
//   //mutaciones
//   //acciones
//   //etc

//   actions: {
//     async fetchBeerApi() {
//       try {
//         const beers = await response();
//         this.beers = beers; //aqui almacenaría los datos en el beers
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   }
// });