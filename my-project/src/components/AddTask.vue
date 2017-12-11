<template>
  <div>
    <p>Add task</p>
    <div class="container">
    <form method="post" id="logInForm">
      <fieldset class="form-group">
        <input class="form-control" type="text" name="subject" placeholder="Subject">
      </fieldset>
      <fieldset class="form-group">
        <textarea class="form-control" name="summary" placeholder="Summary"></textarea>
      </fieldset>
      <fieldset class="form-group">
        <textarea class="form-control" name="description" placeholder="Description"></textarea>
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="date" name="date" placeholder="Date">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="number" min="0" name="priority" placeholder="Priority">
      </fieldset>
      <fieldset class="form-group">
        <router-link to="/profile"><input class="btn btn-success" type="submit" name="submit" value="Add task">
        </router-link>
      </fieldset>
    </form>
    </div>
  </div>
</template>

<script>


  import bus from '../bus'
  export default {
    data() {
      return {}
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
    }
  }
</script>
<style scoped>
  .selectors {
    margin: 10px auto;
    width: 30%;
  }

  .date {
    display: flex;
    width: 30%;
    margin: 0 auto;
    font-size: 150%;
  }

  select {
    font-size: 150%;
    width: 30%;
  }

  .buttons {
    font-size: 150%;
    margin: 10px auto;
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  ul {
    width: 30%;
    margin: 0 auto;
    padding: 0;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 200%;
    font-weight: bold;
  }
  .container{
    margin-top: 10px;
     width: 60%;
   }
</style>
