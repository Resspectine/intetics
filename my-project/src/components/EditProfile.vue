<template>
  <div>
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
      <div class="forms">
        <b-form class="half-size" @submit.prevent="addClass()">
          <p>Add class</p>
          <b-form-group label="Class:">
            <b-form-input v-model="formAddClass.className"
                          type="text"
                          placeholder="Class"></b-form-input>
          </b-form-group>
          <b-form-group label="Type:">
            <b-form-select v-model="formAddClass.type"
                           :options="foods"></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Add class</b-button>
        </b-form>
        <b-form class="half-size" @submit.prevent="addCustom()">
          <p>Custom</p>
          <b-form-group label="Font color:">
            <b-form-input v-model="formCustom.color"
                          type="text"
                          placeholder="In hex format"></b-form-input>
          </b-form-group>
          <b-form-group label="Background image:">
            <b-form-input v-model="formCustom.link"
                          type="text"
                          placeholder="Link"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Add class</b-button>
        </b-form>
      </div>
    </div>
    <div calss="alert">
      <b-alert :show="dismissCountDown"
               variant="success"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged">
        {{status}}
      </b-alert>
    </div>
  </div>
</template>

<script>
  import bus from '../bus'

  export default {
    data() {
      return {
        status: '',
        form: {
          faculty: '',
          group: '',
          course: '',
          status: ''
        },
        formAddClass: {
          className: '',
          type: null
        },
        formCustom: {
          color: '',
          link: '',
          size: ''
        },
        image: '',
        foods: [
          'Exam',
          'Credit',
          'Course work',
          'Course project',
          'None'
        ],
        dismissSecs: 3,
        dismissCountDown: 0
      }
    },
    methods: {
      editProfile: function () {
        let tempBody = {};
        let error = "";
        let router = this.$route;
        let showAlert = this.showAlert;
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
          showAlert(user);
        }).catch(function (er) {
          alert(er);
        });
        this.form.faculty = '';
        this.form.group = '';
        this.form.status = '';
        this.form.course = '';
      },
      addClass: function () {
        let className = this.formAddClass;
        let router = this.$route;
        className.id = router.params.userId;
        let showAlert = this.showAlert;
        const temp = JSON.stringify(className);
        fetch('/api/addclass', {
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
          showAlert(user);
        }).catch(function (er) {
          alert(er);
        });
        this.formAddClass.className = '';
        this.formAddClass.type = null;
      },
      addCustom: function () {
        let custom = this.formCustom;
        let router = this.$route;
        custom.id = router.params.userId;
        let showAlert = this.showAlert;
        const temp = JSON.stringify(custom);
        fetch('/api/addcustom', {
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
          showAlert(user);
        }).catch(function (er) {
          alert(er);
        });
        this.formCustom.color = '';
        this.formCustom.link = '';
        this.formCustom.size = '';
        bus.$emit('updatestyle');
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert(el) {
        this.status = el;
        console.log(this.status);
        this.dismissCountDown = this.dismissSecs
      }
    },
    beforeMount() {
      bus.$emit('userin', localStorage.getItem('userId'));
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
  }

  .alert {
    position: absolute;
    width: 150px;
    bottom: 10px;
    left: 10px;
  }

  .forms{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .half-size{
    width: 48%;
  }
</style>
