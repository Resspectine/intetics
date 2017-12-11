<template>
  <div class="container">
    <p class="caption">
      Today
    </p>
    <div class="forTable">
      <b-table class="margin" :fields="fields" :items="items">
        <!-- A virtual column -->
        <template slot="time" scope="data">
          {{data.value.first}} - {{data.value.last}}
        </template>
        <!-- A custom formatted column -->
        <template slot="name" scope="data">
          {{data.value}}
        </template>
        <!-- A virtual composite column -->
        <template slot="nameage" scope="data">
          {{data.value}}
        </template>
        <template slot="Actions" scope="data">
          <div></div>
        </template>
      </b-table>
    </div>
      <b-button @click="addLesson" class="add">Add Lesson</b-button>
    <p class="date">Choose date</p>
    <input v-model="day" type="date" name="calendar" class="calendar">
  </div>
</template>

<script>
  import bus from '../bus'

  export default {
    data() {
      return {
        fields: [
          // A virtual column that doesn't exist in items
          {key: 'time', label: 'Time'},
          // A column that needs custom formatting
          {key: 'name', label: 'Lesson Name'},
          // A regular column
          {key: 'hall', label: 'Lecture Hall'},
          // A regular column
          'Actions'
        ],
        items: [],
        id: '',
        day:''
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
      this.id = this.$route.params.userId;
    },
    created(){
      let user = {id: this.$route.params.userId};
      let xhr = new XMLHttpRequest();
      xhr.open("POST","/api/getlessons",false);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
      } else{
        let loaded = JSON.parse(xhr.responseText);
        this.items = loaded;
      }
    },
    methods:{
      addLesson: function () {
        this.$router.push({path: `/timetable/${this.id}/addlesson`});
      }
    },
    watch: {
      day: function () {
        let user = {id: this.$route.params.userId, currentDay: this.day};
        let xhr = new XMLHttpRequest();
        xhr.open("POST","/api/getlessons",false);
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(user));
        if(xhr.status!==200){
        } else{
          let loaded = JSON.parse(xhr.responseText);
          this.items = loaded;
        }
      }
    }
  }
</script>

<style scoped>
  .add {
    display: table;
    margin: auto;

  }

  .calendar {
    display: table;
    margin: auto;

  }

  .date {
    width: 200px;
    height: 40px;
    font-size: 150%;
    display: table;
    text-align: center;
    margin:10px auto;

  }

  .b-table {
    display: table;
    margin-left: 130px;
    margin-top: 30px;
    width: 600px;
  }

  .container {
    margin: 20px auto;
    width: 60%;
    justify-content: space-between;

  }

  .caption {
    width: 200px;
    height: 40px;
    font-size: 250%;
    display: table;
    text-align: center;
    margin: auto;
  }

  .margin {
    margin: auto;
  }

  .forTable {
    display: flex;
    padding: 10px;
  }
</style>
