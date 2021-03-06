import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Education from '@/views/EducationView.vue';
import Jobs from '@/views/JobsView.vue';
import CadastroEscolaridade from '@/views/cadEscolaridade.vue';
import CadastroTrabalho from '@/views/CadastroTrabalho.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/educacao',
    name: 'Education',
    component: Education,
  },
  {
    path: "/cad-escolaridade",
    name: "CadastroEscolaridade",
    component: CadastroEscolaridade,
  },
  {
    path: '/trabalho',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: "/cad-trabalho",
    name: "CadastroTrabalho",
    component: CadastroTrabalho,
  },
  // {
  //   path: '/contato',
  //   name: 'Contact',
  //   component: Contact,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
