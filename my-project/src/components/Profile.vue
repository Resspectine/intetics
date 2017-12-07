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
        info: {
          name: 'Anton',
          faculty: 'AM',
          course: '3',
          group: '8'
        },
        toggle: true
      }
    }
  }
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
    height:100%;
  }

  .zeroMargins {
    margin: 0;
  }
</style>
