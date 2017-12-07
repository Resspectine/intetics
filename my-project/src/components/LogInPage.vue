<template>
  <div class="container" id="homePageContainer">
    <h1>Student organizer</h1>
    <p style="font-size: 130%">Make the most of your time.</p>
    <div id="error"></div>
    <form method="post" :class="{visibilityNone: type}" id="signUpForm">
      <p style="font-size: 150%; color: black">Account information</p>
      <fieldset class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Your Email">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="text" name="access_key" placeholder="Confirm password">
      </fieldset>
      <p style="font-size: 150%; color: black">Student information</p>
      <fieldset class="form-group">
        <input class="form-control" type="text" name="access_key" placeholder="Name">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="text" name="access_key" placeholder="Surname">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="text" name="access_key" placeholder="Middle name">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="text" name="access_key" placeholder="Faculty">
      </fieldset>
      <fieldset class="form-group">
        <div class="left">
          <input class="form-control half" type="text" name="access_key" placeholder="Course">
          <input class="form-control half" type="text" name="access_key" placeholder="Group">
        </div>
      </fieldset>
      <fieldset class="form-group">
        <input type="hidden" name="signUp" value="1">
        <input class="btn btn-success" type="submit" name="submit" value="Sign Up!">
      </fieldset>
      <p><a class="toggleForm" href="#" @click="toggleForms()">Log in</a></p>
    </form>
    <form method="post" :class="{visibilityNone: !type}" id="logInForm">
      <fieldset class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Your Email">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password">
      </fieldset>
      <fieldset class="form-group">
        <div class="checkbox">
          <label>
            <input type="checkbox" name="stayLoggedIn" value=1> Stay logged in
          </label>
        </div>
      </fieldset>
      <input type="hidden" name="signUp" value="0">
      <fieldset class="form-group">
        <router-link to="/profile"><input class="btn btn-success" type="submit" name="submit" value="Log In!">
        </router-link>
      </fieldset>
      <p><a class="toggleForm" href="#" @click="toggleForms()">Sign up</a></p>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: false
      }
    },
    methods: {
      toggleForms() {
        this.type = !this.type;
      }
    }
  }
</script>

<style scoped>
  .left {
    display: flex;
  }

  .half {
    width: 50%;
  }

  .visibilityNone {
    display: none;
  }

  .container {
    width: 60%;
  }
</style>
