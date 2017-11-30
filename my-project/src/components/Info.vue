<template>
  <div class="photo">
    <img height="360 px" width="350  px"
         src="http://www.clarkegroup.co.uk/wp-content/uploads/2014/10/placeholder-employee.jpg" class="leftimg">
    <img height="60 px" width="350  px"
         src="https://demiart.ru/forum/uploads2/post-68266-1235419808.jpg">
    <div class="profile">
      <p class="name" v-text="info.name"></p>
      <p class="name">Your Faculty</p>
      <p class="name">Your Course</p>
      <p class="name">Your Group</p>
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
    margin-left: 8%;
    margin-top: 2%;
    margin-right: 0;
  }
  .name {
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    border-bottom: 4px solid black;
    width: 350px;
    font-weight: 600;
    font-size: 150%;
  }
</style>
