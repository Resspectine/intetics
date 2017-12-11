<template>
  <div class="tasks">
    <b-card-group deck>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">Tomorrow</h6>
        <em slot="footer">
          <b-button @click="addTask"
                    variant="primary">Add task
          </b-button>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[0]"
                             :id="task.taskId"
          >
            <TaskElement
              :task="task"/>
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">This week</h6>
        <em slot="footer">
          <router-link to="/tasks/add">
            <b-button
              variant="primary">Add task
            </b-button>
          </router-link>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[1]"
                             :id="task.taskId"
          >
            <TaskElement
              :task="task"/>
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">Soon</h6>
        <em slot="footer">
          <router-link to="/tasks/add">
            <b-button
              variant="primary">Add task
            </b-button>
          </router-link>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[2]"
                             :id="task.taskId"
          >
            <TaskElement
              :task="task"/>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import TaskElement from "./TaskElement.vue"
  import bus from '../bus'

  const tasks = [[], [], []];
  export default {
    components: {TaskElement},
    data() {
      return {
        tasks: tasks,
        id: ''
      }
    },
    beforeMount() {
      this.id = this.$route.params.userId;
      bus.$emit('userin', localStorage.getItem('userId'));
    },
    methods: {
      addTask: function () {
        this.$router.push({path: `/tasks/${this.id}/add`});
      }
    },
    created() {
      let counter=0;
      let date = new Date();
      let user = {id: this.$route.params.userId};
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/gettasks", false);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(user));
      if (xhr.status !== 200) {
      } else {
        let loaded = JSON.parse(xhr.responseText);
        loaded.forEach(function (el) {
          el.taskId = counter++;
          if ((new Date(el.date) - date) < 86400000) {
            tasks[0].push(el);
          } else if ((new Date(el.date) - date) < 7 * 86400000) {
            tasks[1].push(el);
          } else {
            tasks[2].push(el);
          }
        })
      }
    },
  }
</script>
<style scoped>
  input {
    vertical-align: middle
  }

  .tasks {
    width: 60%;
    margin: 10px auto;
  }
</style>
