import axios from 'axios';

export const fetchBeerApi = () => {
  return axios.get('https://api.punkapi.com/v2/beers');
}
//aqui hago solo la llamada para no llamarla más veces, y ahora en el store debo hacer el
