import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const createRoute = componentName => {
  return {
    path: '/' + componentName.toLowerCase(),
    name: componentName.toLowerCase(),
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `../views/${componentName}.vue`
      ),
  }
}

const viewsToRoutes = () => {
  return require
    .context('../views', true, /^((?!vue).)*$/, 'lazy')
    .keys()
    .map(item => item.replace('./', ''))
    .filter(item => item !== 'Home')
    .map(createRoute)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...viewsToRoutes(),
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
