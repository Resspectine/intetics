<template>
  <div id="app">
    <Hat :id="id"/>
    <router-view></router-view>
    <!--<AddTask/>-->
  </div>
</template>

<script>
  import Hat from './components/Hat.vue'
  import EditProfile from './components/EditProfile.vue'
  import AddTask from './components/AddTask.vue'
  import bus from './bus'

  export default {
    data(){
      return{
        id:''
      }
    },
    components: {
      EditProfile, Hat, AddTask
    },
    created(){
      bus.$on('userin', user=>{
        this.id=user;
      });
      bus.$on('userout', user=>{
        this.id='';
      })
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
