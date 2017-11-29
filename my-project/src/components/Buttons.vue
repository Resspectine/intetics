<template>
  <button>{{button.name}}</button>
</template>
<script>
  export default {
    props: {
      button: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style scoped>
button{
  border-radius:4px;
  border: 1px solid;
  padding: 0.6em 1.4em;
  background-color: lightgrey;
}
</style>
