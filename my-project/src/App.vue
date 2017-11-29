<template>
  <div id="app">
    <Hat/>
    <router-view></router-view>
    <!--<AddTask/>-->
  </div>
</template>

<script>
  import Hat from './components/Hat.vue'
  import EditProfile from './components/EditProfile.vue'
  import AddTask from './components/AddTask.vue'

  export default {
    components: {
      EditProfile, Hat, AddTask
    }
  }
</script>

<style>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  #app {
    max-width: 100%;
    line-height: 1.4;
  }

  h1 {
    text-align: center;
  }
</style>
