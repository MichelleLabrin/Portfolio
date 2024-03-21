import { createStore } from 'vuex';
import { beers } from './beers';
import { jewerly } from './jewerlys';



export default createStore ({
  modules:{ beers, jewerly }
})
