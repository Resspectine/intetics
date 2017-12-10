<template>
  <div class="container">
    <p>Edit profile</p>
    <b-form @submit.prevent="editProfile">
      <b-form-group label="Faculty:">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.faculty"
                      required
                      placeholder="Enter faculty">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Group:">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.group"
                      required
                      placeholder="Enter group">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Course:">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.course"
                      required
                      placeholder="Enter course">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3" label="Status:">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      v-model="form.status"
                      placeholder="Live young die fast">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form-group>
    </b-form>
    <p>Add class</p>
    <b-form @submit.prevent="addClass">
      <b-form-group label="Class">
        <b-form-input type="text"
                      placeholder="Class"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select :options="foods"></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Add class</b-button>
    </b-form>
  </div>
</template>

<script>
  import CustomInput from './CustomInput.vue'
  import Buttons from './Buttons.vue'
  import TypeSelector from './TypeSelector.vue'

  export default {
    data() {
      return {
        form: {
          faculty: '',
          group: '',
          course: '',
          status: ''
        },
        foods: [
          'Exam', 'Credit', 'Course work', 'Course project', 'None'
        ]
      }
    },
    methods: {
      editProfile: function () {
        let tempBody = {};
        let error = "";
        let router = this.$route;
        tempBody.id = router.params.userId;
        tempBody.faculty = this.form.faculty;
        tempBody.group = this.form.group;
        tempBody.status = this.form.status;
        tempBody.course = this.form.course;
        console.log(tempBody);
        const temp = JSON.stringify(tempBody);
        fetch('/api/editprofile', {
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
          console.log(user);
        }).catch(function (er) {
          alert(er);
        });

      },
      addClass: function () {

      }
    }
  }
</script>
<style scoped>
  p {
    margin: 0;
    text-align: center;
    font-size: 200%;
    font-weight: bold;
  }

  .container {
    width: 60%;
  }
</style>
