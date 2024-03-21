import axios from 'axios';

export const fetchJewerlyApi = () => {
  return axios.get('https://64807077f061e6ec4d494adb.mockapi.io/jewerly');
}
//aqui hago solo la llamada para no llamarla más veces, y ahora en el store debo hacer el
