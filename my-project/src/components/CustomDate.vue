<template>
  <div class="date">
    <label for="date">Date due</label>
    <input id="date" type="date">
  </div>
</template>

<script>
  export default {
  }
</script>
<style scoped>
  .date{
    width:30%;
    margin:0 auto ;
    font-size: 150%;
    display: flex;
    justify-content: space-between;
  }
  input{
    width: 50%;
  }
</style>
