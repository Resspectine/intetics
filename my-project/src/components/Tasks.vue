<template>
  <div class="tasks">
    <b-card-group deck>
      <b-card header-tag="header"
              footer-tag="footer">
        <h6 slot="header"
            class="mb-0">Tomorrow</h6>
        <em slot="footer">
          <router-link to="/tasks/add"><b-button
                    variant="primary">Add task
          </b-button></router-link>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[0]"
          :id="task.id"
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
          <router-link to="/tasks/add"><b-button
                    variant="primary">Add task
          </b-button></router-link>
        </em>
        <b-list-group flush>
        <b-list-group-item v-for="task in tasks[1]"
                           :id="task.id"
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
          <router-link to="/tasks/add"><b-button
                    variant="primary">Add task
          </b-button></router-link>
        </em>
        <b-list-group flush>
          <b-list-group-item v-for="task in tasks[2]"
                             :id="task.id"
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

  const tasks = [[
    {
      id: 1,
      name: 'Programming',
      priority: 4
    }, {
      id: 2,
      name: 'Course work',
      priority: 2
    }, {
      id: 3,
      name: 'YMF',
      priority: 5
    }
  ],[
    {
      id: 1,
      name: 'Programming',
      priority: 1
    }, {
      id: 2,
      name: 'Course work',
      priority: 2
    }, {
      id: 3,
      name: 'YMF',
      priority: 5
    }
  ],[
    {
      id: 1,
      name: 'Programming',
      priority: 6
    }, {
      id: 2,
      name: 'Course work',
      priority: 2
    }, {
      id: 3,
      name: 'YMF',
      priority: 5
    }
  ]];
  export default {
    components: {TaskElement},
    data() {
      return {
        tasks: tasks
      }
    }
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
