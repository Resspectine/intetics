<template>
  <li>
    <label v-bind:for="todo.name">{{todo.text}}</label><textarea v-bind:id="todo.name" type="text"
                                                                 v-bind:name='todo.name'
                                                                 v-bind:placeholder="todo.placeholder"/>
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style scoped>
  li {
    font-size: 150%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }

  li input{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid;
    padding: 2px;
    font-size: 80%;
  }

  li textarea {
    border-radius: 4px;
    border: 1px solid;
    width: 60%;
  }
</style>
