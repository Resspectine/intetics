<template>
  <div class="container" id="homePageContainer">
    <h1>Student organizer</h1>
    <p style="font-size: 130%">Make the most of your time.</p>
    <div id="error"></div>
    <p v-if="error" v-text="error"></p>
    <form method="post" :class="{visibilityNone: type}" id="signUpForm" @submit.prevent="createUser()">
      <p style="font-size: 150%; color: black">Account information</p>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.email" type="email" name="email" placeholder="Your Email" required>
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.password" type="password" name="password" placeholder="Password"
               required>
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.confirmPassword" type="password" name="access_key"
               placeholder="Confirm password" required>
      </fieldset>
      <p style="font-size: 150%; color: black">Student information</p>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.name" type="text" name="access_key" placeholder="Name">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.surname" type="text" name="access_key" placeholder="Surname">
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control" v-model="newUser.faculty" type="text" name="access_key" placeholder="Faculty">
      </fieldset>
      <fieldset class="form-group">
        <div class="left">
          <input class="form-control half" v-model="newUser.course" type="text" name="access_key" placeholder="Course">
          <input class="form-control half" v-model="newUser.group" type="text" name="access_key" placeholder="Group">
        </div>
      </fieldset>
      <fieldset class="form-group">
        <input type="hidden" name="signUp" value="1">
        <input class="btn btn-success" type="submit" name="submit" value="Sign Up!">
      </fieldset>
      <p><a class="toggleForm" href="#" @click="toggleForms()">Log in</a></p>
    </form>
    <form method="post" :class="{visibilityNone: !type}" @submit.prevent="addReview" id="logInForm">
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
  import bus from "../bus";

  export default {
    data() {
      return {
        type: false,
        newUser: {
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          surname: "",
          faculty: "",
          course: "",
          group: ""
        },
        error: ""
      }
    },
    methods: {
      toggleForms() {
        this.type = !this.type;
      },
      createUser() {
        let error = "";
        let router = this.$router;
        if (this.newUser.password !== this.newUser.confirmPassword) {
          error += "Passwords is not the same";
        } else {
          const temp = JSON.stringify(this.newUser);
          fetch('/api/signup', {
            headers: {"Content-Type": "application/json"},
            method: 'post',
            body: temp
          }).then(function (response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("kek");
            }
          }).then(function (user) {
            localStorage.setItem('userId', user);
            bus.$emit('userin', user);
            router.push({name: "Profile", params: {userId: user}});
          }).catch(function (er) {
            alert(er);
          });
        }
        this.error = error;
      },
      // beforeMount: function () {
      //   console.log(this.$route.params.userId);
      //   // console.log('out');
      //   // bus.$emit('userout');
      // },
      addReview() {
        if (!this.movie || !this.review.reviewer || !this.review.content) {
          alert('please make sure all fields are not empty');
          return
        }
        let review = {
          movie_id: this.movie,
          content: this.review.content,
          reviewer: this.review.reviewer,
          time: new Date().toLocaleDateString()
        };
        fetch('/api/review', {
          method: 'post',
          body: JSON.stringify(review)
        }).then(() => {
          this.review.content = this.review.reviewer = ''
        })
      }
      // ...
    },

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

