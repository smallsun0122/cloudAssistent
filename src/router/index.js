import Vue from 'vue'
import Router from 'vue-router'
import Announcement from '@/components/Announcement'
import Publish from '@/components/Publish'
import CreateMeeting from '../components/meeting/Create'
import Meeting from '../components/meeting/Meeting.vue'
import Room from '../components/room/Room.vue'
import Society from '../components/society/Society.vue'
import Main from '../components/main/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
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
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: Meeting
    },
    {
      path: '/meeting/create',
      name: 'create',
      component: CreateMeeting
    },
    {
      path: '/room',
      name: 'room',
      component: Room
    },
    {
      path: '/society',
      name: 'society',
      component: Society
    }
  ]
})
