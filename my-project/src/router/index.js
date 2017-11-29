import Vue from 'vue';
import Router from 'vue-router';
import StartPage from '../components/StartPage.vue'
import AddTask from '../components/AddTask.vue'
import EditProfile from '../components/EditProfile.vue'
import Profile from '../components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: StartPage
    }, {
      path: '/addTask',
      name: 'AddTask',
      component: AddTask
    }, {
      path: '/editProfile',
      name: 'Edit profile',
      component: EditProfile
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
