import Vue from 'vue';
import Router from 'vue-router';
import LogInPage from '../components/LogInPage.vue'
import AddTask from '../components/AddTask.vue'
import EditProfile from '../components/EditProfile.vue'
import Profile from '../components/Profile.vue'
import Tasks from '../components/Tasks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogInPage',
      component: LogInPage
    }, {
      path: '/tasks/add',
      name: 'Tasks add',
      component: AddTask
    }, {
      path: '/profile/edit',
      name: 'Edit profile',
      component: EditProfile
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
})
