<template>
<option>{{id.name}}</option>
</template>

<script>
  export default {
    name: 'TypeSelector',
    props: {
      id: {
        type: Object,
        required: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  option{
    font-size: 80%;
    border: 1px solid;
  }
</style>
