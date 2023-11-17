import { createRouter, createWebHistory, useRouter } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PageNotFoundComponent from "../views/PageNotFoundView.vue";
import { isAuthenticated } from '../services/authenticationService'

import {
  LOGIN_PATH,
  LOGIN_ROUTE,
  STATUS_PATH,
  STATUS_ROUTE
} from '../constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFoundComponent
    },
    {
      path: LOGIN_ROUTE,
      name: LOGIN_ROUTE,
      component: LoginView
    },
    {
      path: STATUS_PATH,
      name: STATUS_ROUTE,
      component: () => import('../views/ServiceStatusView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (!isAuthenticated() && to.name !== LOGIN_ROUTE) {
    return { name: LOGIN_ROUTE }
  }
  else if(isAuthenticated()  && to.name !== STATUS_ROUTE) {
    return {name: STATUS_ROUTE}
  }
})

export default router
