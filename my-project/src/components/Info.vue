<template>
  <div class="photo">
    <p class="name" v-text="info.name+' '+info.surname"></p>
    <p class="name" v-if="info.status" v-text="info.status"></p>
    <p class="name" v-text="info.faculty"></p>
    <p class="name" v-text="info.course+' course'"></p>
    <p class="name" v-text="info.group+' group'"></p>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .photo {
    display: flex;
    flex-direction: row;
  }

  .status {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: 200;
    font-size: 150%;
    margin: 10px;
  }
</style>
