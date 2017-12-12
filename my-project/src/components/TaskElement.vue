<template>
  <div class="task">
    <div>
      <input type="checkbox">
      <b-button @click="addTask">{{task.subject}}</b-button>
    </div>
    <div>
      <icon name="star-o" v-for="n in parseInt(task.priority)"></icon>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    components: {Icon},
    data() {
      return {
        star: star
      }
    },
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
      addTask: function () {
        console.log('el');
      }
    }
  }

  const star = [
    {id: 1}, {id: 2}, {id: 3}, {id: 4}
  ];
</script>
<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
  }

  input {
    vertical-align: middle
  }
</style>
