<template>
  <div class="container">
    <p class="caption">
      Today
    </p>
    <div class="forTable">
      <b-table class="margin" :fields="fields" :items="items">
        <template slot="time" scope="data">
          {{data.value.first}} - {{data.value.last}}
        </template>
        <template slot="name" scope="data">
          {{data.value}}
        </template>
        <template slot="professor" scope="data">
          {{data.value}}
        </template>
        <template slot="hall" scope="data">
          {{data.value}}
        </template>
        <template slot="lessonId" scope="data">
          <b-button variant="danger" @click="deleteLesson(data)" size="sm" class="mr-2">
            Delete
          </b-button>
        </template>
      </b-table>
    </div>
    <b-button @click="addLesson" class="add">Add Lesson</b-button>
    <p class="date">Choose date</p>
    <input v-if="items" v-model="day" type="date" name="calendar" class="calendar">
    <div calss="alert">
      <b-alert :show="dismissCountDown"
               variant="success"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged">
        {{status}}
      </b-alert>
    </div>
  </div>
</template>

<script>
  import bus from '../bus'

  export default {
    data() {
      return {
        fields: [
          {key: 'time', label: 'Time'},
          {key: 'name', label: 'Lesson Name'},
          {key: 'professor', label: 'Professor'},
          {key: 'hall', label: 'Lecture Hall'},
          {key: 'lessonId', label: 'Actions'}
        ],
        items: [],
        id: '',
        day: '',
        dismissSecs: 3,
        dismissCountDown: 0,
        status: ''
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
      this.id = this.$route.params.userId;
    },
    created() {
      let user = {id: this.$route.params.userId};
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/getlessons", false);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(user));
      if (xhr.status !== 200) {
      } else {
        let loaded = JSON.parse(xhr.responseText);
        console.log(loaded);
        this.items = loaded;
      }
    },
    methods: {
      deleteLesson: function (el) {
        let showAlert = this.showAlert;
        fetch('/api/deletelesson', {
          headers: {"Content-Type": "application/json"},
          method: 'post',
          body: JSON.stringify({lessonId: el.value})
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("kek");
          }
        }).then(function (user) {
          showAlert(user);
        }).catch(function (er) {
          alert(er);
        });
        this.items.splice(this.items.indexOf(el.item), 1);
      },
      addLesson: function () {
        this.$router.push({path: `/timetable/${this.id}/addlesson`});
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert(el) {
        this.status = el;
        console.log(this.status);
        this.dismissCountDown = this.dismissSecs
      }
    },
    watch: {
      day: function () {
        let user = {id: this.$route.params.userId, currentDay: this.day};
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/getlessons", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(user));
        if (xhr.status !== 200) {
        } else {
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
    margin: 10px auto;

  }

  .b-table {
    display: table;
    margin-left: 130px;
    margin-top: 30px;
    width: 100%;
  }

  .container {
    margin: 20px auto;

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

  .alert {
    position: absolute;
    width: 150px;
    bottom: 10px;
    left: 10px;
  }

</style>
