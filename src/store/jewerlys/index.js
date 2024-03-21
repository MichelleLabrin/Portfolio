import mutations from './mutations'
import { requestActions } from './actions'

export const defaultState = () => ({
  jewerly: [],
})

export const module = 'jewerly/'

export const jewerly = {
  namespaced: true,

  state: defaultState(),

  mutations,

  actions: {...requestActions }

}
