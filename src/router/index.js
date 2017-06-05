import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation'
import Announcement from '@/components/Announcement'
import Publish from '@/components/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/Announcement',
      name: 'Announcement',
      component: Announcement
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
