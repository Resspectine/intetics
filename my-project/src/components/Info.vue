<template>
  <div class="photo">
    <img height="257 px" width="250  px"
         src="http://www.clarkegroup.co.uk/wp-content/uploads/2014/10/placeholder-employee.jpg" class="leftimg">
    <img height="43 px" width="250  px"
         src="https://demiart.ru/forum/uploads2/post-68266-1235419808.jpg">
    <div>
      <p class="name" v-text="info.name"></p>
      <p class="name" v-text="info.faculty">Your Faculty</p>
      <p class="name" v-text="info.course+' course'">Your Course</p>
      <p class="name" v-text="info.group+' group'">Your Group</p>
    </div>
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
    flex-direction: column;
  }
  .name {
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    border-bottom: 4px solid black;
    font-weight: 600;
    font-size: 150%;
  }
</style>
