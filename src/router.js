import { createRouter, createWebHistory } from 'vue-router';

import Tab1 from './components/Tab1.vue';
import Tab2 from './components/Tab2.vue';
import Extra from './components/mypractice/extra.vue';
import ExtraUno from './components/mypractice/funcionesycomputadas/funcionesycomputadas.vue';
import ExtraDos from './components/mypractice/propsemitsinjection/extrapadre.vue';
import computada from './components/mypractice/computed/ComputedExample.vue';
import ExtraTres from './components/mypractice/componentes/PostContainer.vue';
import TeacherForm from './components/mypractice/teachersEjercicio/TeacherForm.vue';
import MemoryGame from './components/mypractice/memoryGame/memoryGame.vue';
import home from './components/home/home.vue';
import JewerlyWeb from './components/joyeriaweb/joyeriaweb.vue';
import CartComponent from './components/joyeriaweb/joyeriashop/cartview.vue';
import BakeryBlog from './components/bakeryblog/BakeryBlog.vue';
import HagueDeco from './components/haguedeco/HagueDeco.vue';

const routes = [
  { path: '/home', component: home },
  { path: '/', redirect: '/home' },
  { path: '/servicios', component: Tab1 },
  { path: '/estancias', component: Tab2 },
  { path: '/games', component: Extra},
  { path: '/extrauno', component: ExtraUno},
  { path: '/extrados', component: ExtraDos},
  { path: '/extratres', component: ExtraTres},
  { path: '/teacherform', component: TeacherForm},
  { path: '/computada', component: computada},
  { path: '/memoryGame', component: MemoryGame},
  { path: '/jewerlyweb', name: 'jewerlyweb', component: JewerlyWeb},
  { path: '/cart', component: CartComponent },
  { path: '/bakeryblog', component: BakeryBlog},
  {path: '/haguedeco', component: HagueDeco},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
