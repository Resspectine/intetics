<template>
  <div class="container">
    <Info :info="info"/>
    <div class="marks">
      <b-table :class="{ zeroMargins: toggle}" striped hover :items="items"></b-table>
      <div class="under">
        <p class="average">Average mark: 10.7;</p>
        <b-button variant="primary" @click='editProfile'>Edit Profile
        </b-button>
      </div>
    </div>
  </div>
</template>


<script>
  import Info from './Info.vue';
  import bus from '../bus'

  export default {
    components: {Info},
    data() {
      return {
        items: items,
        info: info,
        toggle: true
      }
    },
    methods:{
      editProfile: function () {
        this.$router.push({path: `/profile/${info.id}/edit`});
      }
    },
    beforeCreate: function () {
      let xhr = new XMLHttpRequest();
      xhr.open("POST","/api/user",false);
      xhr.setRequestHeader("Content-Type","application/json");
      let router = this.$router;
      let user = {id: this.$route.params.userId};
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
        router.push({name: "LogInPage"});
      } else{
        let loaded = JSON.parse(xhr.responseText);
        info.name = loaded.name;
        info.surname = loaded.surname;
        info.faculty = loaded.faculty;
        info.course = loaded.course;
        info.group = loaded.group;
        info.id = loaded.id;
      }
      xhr = new XMLHttpRequest();
      xhr.open("POST","/api/getclasses",false);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
      } else{
        let loaded = JSON.parse(xhr.responseText);
        loaded.forEach(function (clas) {
          template.enrolledCourses = clas.className;
          template.control = clas.type;
          items.push(template);
          template={};
        })
      }
    },
    beforeMount(){
      bus.$emit('userin',localStorage.getItem('userId'));
    }
  }
  let info = {};

  let template={};

  let items = [
  ]
</script>

<style scoped>
  .under {
    display: flex;
    justify-content: space-between;
  }

  .average {
    font-family: 'Abril Fatface', cursive;
    font-weight: 600;
    font-size: 150%;
  }

  .table {
    margin-left: 100px;
  }

  .container {
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .marks {
    width: 60%;
    height: 100%;
  }

  .zeroMargins {
    margin: 0;
    width: 100%;
  }
</style>
