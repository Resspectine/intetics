<template>
  <div class="task">
    <div>
      <input type="checkbox">
      <a href="#">{{task.name}}</a>
    </div>
    <div>
      <icon name="star-o" v-for="n in task.priority"></icon>
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
    }
  }

  const star = [
    {id: 1}, {id: 2}, {id: 3}, {id: 4}
  ];
</script>
<style scoped>
  .task{
    display: flex;
    justify-content: space-between;
  }
  input {
    vertical-align: middle
  }
</style>
