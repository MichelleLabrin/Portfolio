import { fetchJewerlyApi } from '../../service/jewerlyapi'
import { SET_JEWERLY } from './mutations';

export const requestActions = {
  requestJewerlyApi: async({commit}) => {
    try {
      const response = await fetchJewerlyApi();
      commit(SET_JEWERLY, response.data)
      console.log('joyas', response.data)
    }
    catch (error) {
      console.error('Error: actios', error);
    }
  }
}