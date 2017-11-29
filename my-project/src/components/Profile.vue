<template>
  <div>
    <div class="photo">
      <img height="360 px"  width="350  px"
           src="http://www.clarkegroup.co.uk/wp-content/uploads/2014/10/placeholder-employee.jpg"  class="leftimg">
      <img height="60 px" width="350  px"
           src="https://demiart.ru/forum/uploads2/post-68266-1235419808.jpg">
      <div class="profile">
        <p class="name">Your Name</p>
        <p class="name">Your Faculty</p>
        <p class="name">Your Course</p>
        <p class="name">Your Group</p>
      </div>
    </div>
    <div class="left-side">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th scope="col">Enrolled Courses</th>
          <th scope="col">Rating</th>
          <th scope="col">Control</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
        </tr>
        <tr>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
        </tr>
        <tr>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
        </tr>
        <tr>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
        </tr>
        <tr>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
          <td>Multi-line text area</td>
        </tr>
        </tbody>
      </table>
      <div class="under">
        <div class="average">Average mark: 10.7;</div>
        <a href="Edit"
           style="font-weight:600; margin-top:20px; margin-left:260px; font-size: 150%;">Edit
          Profile</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

  .name {
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    border-bottom: 4px solid black;
    width: 350px;
    font-weight: 600;
    font-size: 150%;
  }

  .body {
    display: flex;

  }

  .profile {
  }

  .leftimg {
    float: left; /* Выравнивание по левому краю */
    margin-right: 150px; /* Отступы вокруг картинки */
  }

  .photo {
    display: flex;
    flex-direction: column;
    margin-left: 8%;
    margin-top: 2%;
    margin-right: 0%;
  }


  .Rating {
    display: inline-block;
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    border: 2px solid black;
    border-top: 0;
    width: 220px;
    font-weight: 600;
    font-size: 150%;
    padding: 10px 20px;
    margin: 5px 0;
  }

  .under{
    display: flex;
    justify-content: space-between;
  }

  table {
    margin-top: 10px;
  }

  .average {
    display: inline-block;
    text-align: center;
    align-self: center;
    font-family: 'Abril Fatface', cursive;
    width: 220px;
    font-weight: 600;
    margin-top: 20px;
    font-size: 150%;
  }

  .Edit {
    display: inline-block;
    text-align: center;
    align-self: center;
    font-family: 'Abril Fatface', cursive;
    width: 220px;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 220px;
    font-size: 150%;
  }

  .left-side{
    width:800px;
  }
</style>
