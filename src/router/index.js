import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation'
import Announcement from '@/components/notices/Announcement'
import Publish from '@/components/notices/Publish'
import MyInfo from '@/components/setinfo/MyInfo'
import CreateMeeting from '../components/meeting/Create'
import Meeting from '../components/meeting/Meeting.vue'
import Room from '../components/room/Room.vue'
import Society from '../components/society/Society.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/notices/Announcement',
      name: 'Announcement',
      component: Announcement
    },
    {
      path: '/notices/Publish',
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
    },
    {
      path: '/setinfo/MyInfo',
      name: 'MyInfo',
      component: MyInfo
    }
  ]
})
