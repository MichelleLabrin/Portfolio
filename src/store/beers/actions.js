
import { SET_BEERS } from './mutations';
import { fetchBeerApi } from '@/service/dataapi.ts';

export const requestActions = { requestBeerApi:
  async ({ commit }) => {
  try {
    const response = await fetchBeerApi();
    commit(SET_BEERS, response.data);
    console.log("Beers cargadas:", response.data);
  } 
  catch (error) {
    console.error('Error:', error);
  } 
},
}





// 9: Las acciones son métodos que pueden contener lógica asincrónica, como realizar solicitudes a una API o efectuar cambios en el estado a través de mutaciones.

// 12: método commit se utiliza para llamar a mutaciones y modificar el estado. la acción que hará será una llamada a la API y actualizará el estado.

//try-catch para manejar errores que puedan ocurrir durante la ejecución de la acción.

// 12: método commit para llamar a la mutación SET_BEERS, que actualizará el estado con los datos de las cervezas recibidos en response.data