<template>
  <div class="container">
    <Info :info="info"/>
    <div class="marks">
      <b-table :class="{ zeroMargins: toggle}" striped hover :items="items"></b-table>
      <div class="under">
        <p class="average">Average mark: 10.7;</p>
        <router-link to="/profile/edit">Edit Profile
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import Info from './Info.vue';

  export default {
    components: {Info},
    data() {
      return {
        items: items,
        info: info,
        toggle: true
      }
    },
    beforeCreate: function () {
      let xhr = new XMLHttpRequest();
      xhr.open("POST","/api/user",false);
      xhr.setRequestHeader("Content-Type","application/json");
      let router = this.$router;
      let user = {id: this.$route.params.userId};
      xhr.send(JSON.stringify(user));
      if(xhr.status!==200){
        router.push({name: "LogInPage"});
      } else{
        let loaded = JSON.parse(xhr.responseText);
        info.name = loaded.name;
        info.faculty = loaded.faculty;
        info.course = loaded.course;
        info.group = loaded.group;
      }
    }
  }
  let info = {};

  const items = [
    {enrolledCourses: 'Programming', rating: 10, control: 'Exam 14.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'},
    {enrolledCourses: 'YMF', rating: 8, control: 'Exam 25.01'}
  ]
</script>

<style scoped>
  .under {
    display: flex;
    justify-content: space-between;
  }

  .average {
    font-family: 'Abril Fatface', cursive;
    font-weight: 600;
    font-size: 150%;
  }

  .table {
    margin-left: 100px;
  }

  .container {
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .marks {
    width: 60%;
    height: 100%;
  }

  .zeroMargins {
    margin: 0;
  }
</style>
