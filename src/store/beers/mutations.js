export const SET_BEERS = 'SET_BEERS';

export default {
  SET_BEERS: (state, beers) => {
      state.beers = beers;
    },
  };



// Las mutaciones son funciones que se utilizan para cambiar el estado 
// Las mutaciones toman dos argumentos: state y payload. state representa el estado actual de la tienda y patyload (beers) es el argumento que se pasa a la mutación. En este caso, beers contendrá los nuevos datos que se utilizarán para actualizar el estado.
