import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import("../views/Contato.vue")
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("../views/Cursos.vue")
  },
  {
    path: "/cursos/:curso",
    name: "Curso",
    component: () => import("../views/Curso.vue"),
    props: true,
    children: [{
      name: "Aula",
      path: ":aula",
      component: () => import("../views/Aulas.vue"),
      props: true
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
