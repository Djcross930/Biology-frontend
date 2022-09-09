import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeqView from '../views/SeqView.vue'
import SignupView from "../views/SignupView.vue"
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue"
import GenesShow from "../views/GenesShow.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ChromosomeView',
    name: 'ChromosomeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChromosomeView.vue')
  },
  {
    path: '/seq',
    name: 'sequence',
    component: SeqView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  },
  {
    path: "/genes/:id",
    name: "genesShow",
    component: GenesShow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
