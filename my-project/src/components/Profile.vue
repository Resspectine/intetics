<template>
  <div class="container">
    <Info :info="info"/>
    <div class="marks">
      <b-table :fields="fields" :class="{ zeroMargins: toggle}" striped hover :items="items">
        <template slot="enrolledCourses" scope="data">
          {{data.value}}
        </template>
        <template slot="control" scope="data">
          {{data.value}}
        </template>
      </b-table>
      <div class="under">
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
        fields: [
          {key: 'className', label: 'Enrolled Courses'},
          {key: 'type', label: 'Control'}
        ],
        items: [],
        info: {},
        toggle: true
      }
    },
    methods:{
      editProfile: function () {
        this.$router.push({path: `/profile/${this.info.id}/edit`});
      }
    },
    created: function () {
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
        this.info = loaded;
      }
      xhr = new XMLHttpRequest();
      xhr.open("POST","/api/getclasses",false);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
      } else{
        let loaded = JSON.parse(xhr.responseText);
        console.log(loaded);
        this.items = loaded;
      }
    },
    beforeMount(){
      bus.$emit('userin',localStorage.getItem('userId'));
    }
  }
  let template={};
</script>

<style scoped>
  .under {
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
