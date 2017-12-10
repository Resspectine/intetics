<template>
  <div class="container">
    <p>Edit profile</p>
    <b-form @submit="" @reset="">
      <b-form-group label="Faculty:">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="Enter faculty">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Group:">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.name"
                      required
                      placeholder="Enter group">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Course:">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.name"
                      required
                      placeholder="Enter course">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3" label="Status:">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      v-model="form.food"
                      placeholder="Live young die fast">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form-group>
    </b-form>
    <p>Add class</p>
    <b-form>
      <b-form-group label="Class">
        <b-form-input type="text"
                      placeholder="Class"></b-form-input>
      </b-form-group>
      <b-form-group label="Class">
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

  let nextTodoId = 1

  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: false
        },
        foods: [
          {text: 'Select One', value: null},
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ]
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
