import { createRouter, createWebHistory } from 'vue-router'
import Chat from '@/pages/Chat'
import Navbar from '@/components/UI/Navbar'

const routes = [
  {
    path: '/chat/:chatid',
    component: Chat,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
