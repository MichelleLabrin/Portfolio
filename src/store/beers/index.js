import mutations from './mutations'
import { requestActions } from './actions'

export const defaultState = () => ({
  beers: [],
})

export const module = 'beers/'

export const beers = {
  namespaced: true,

  state: defaultState(),

  mutations,

  actions: {...requestActions }

}

//dos tipos de acciones 
//importo las acciones, 

// aqui defino mi objeto de estado inicial para Vuex, con mis cinco propiedades que se inicializa como un objeto vacío {}


// declaro el create store aqui 