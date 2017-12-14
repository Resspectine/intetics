<template>
  <div class="bg" :style="styleObject" id="app">
    <div class="background">
      <Hat :id="id"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Hat from './components/Hat.vue'
  import EditProfile from './components/EditProfile.vue'
  import AddTask from './components/AddTask.vue'
  import TimeTable from './components/Timetable'
  import AddLesson from './components/AddLesson'
  import bus from './bus'

  export default {
    data() {
      return {
        id: '',
        styleObject: {
          color: '',
          backgroundImage: ''
        },
        active: true
      }
    },
    components: {
      EditProfile, Hat, AddTask, TimeTable, AddLesson
    },
    methods: {
      updateStyle: function () {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/getcustom", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        let router = this.$router;
        let user = {id: this.$route.params.userId};
        console.log(user);
        xhr.send(JSON.stringify(user));
        if (xhr.status !== 200) {
        } else {
          let loaded = JSON.parse(xhr.responseText);
          this.styleObject.color = loaded.color;
          this.styleObject.backgroundImage = `url("${loaded.link}")`;
          console.log(this.styleObject);
        }
      }
    },
    created() {
      this.updateStyle();
      bus.$on('userin', user => {
        this.id = user;
      });
      bus.$on('updatestyle', user => {
        this.updateStyle();
      });
      bus.$on('userout', user => {
        this.id = '';
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

  body, html {
    height: 100%;
  }

  .bg {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .background{
    width: 60%;
    margin: 0 auto;
    padding-bottom: 10px;
    background: rgba(255,255,255,0.8);
  }
</style>
