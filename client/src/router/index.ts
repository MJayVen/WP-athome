import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AddWorkoutView from '../views/AddWorkoutView.vue';
import UsersView from '../views/UsersView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/workout/:wid',
      name: 'workout',
      component: AddWorkoutView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/following',
      name: 'following',
      component: () => import('../views/FollowingView.vue')
    },
    {
      path:'/analyze',
      name: 'analyze',
      component: () => import('../views/AnalyzeView.vue'),
    }
  ]
})

export default router
