<template>
  <div>
    <p>Edit profile</p>
    <ul v-if="editProfile.length">
      <CustomInput
        v-for="todo in editProfile"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
    <div class="buttons">
      <Buttons
        v-for="button in buttonArrayEdit"
        :key="button.id"
        :button="button"
      />
    </div>
    <p>Add class</p>
    <ul>
      <CustomInput
        :key="addClass.id"
        :todo="addClass"
      />
    </ul>
    <div class="selectors">
      <select>
        <TypeSelector v-for="type in types"
                      :key="type.id"
                      :id="type"/>
      </select>
    </div>
    <div class="buttons">
      <Buttons
        :key="buttonArrayAdd.id"
        :button="buttonArrayAdd"
      />
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
  import CustomInput from './CustomInput.vue'
  import Buttons from './Buttons.vue'
  import TypeSelector from './TypeSelector.vue'

  let nextTodoId = 1

  export default {
    components: {
      CustomInput, Buttons, TypeSelector
    },
    data() {
      return {
        newTodoText: '',
        editProfile: [
          {
            id: 1,
            name: 'faculty',
            placeholder: 'Faculty',
            text: 'Faculty'
          },
          {
            id: 2,
            name: 'group',
            placeholder: 'Group',
            text: 'Group'
          },
          {
            id: 3,
            name: 'course',
            placeholder: 'Course',
            text: 'Course'
          },
          {
            id: 4,
            name: 'status',
            placeholder: 'Live fast die young',
            text: 'Status'
          }
        ],
        buttonArrayEdit: [
          {
            id: 1,
            name: 'Change'
          }, {
            id: 2,
            name: 'Save'
          }, {
            id: 3,
            name: 'Log out'
          }
        ],
        addClass:
          {
            id: 1,
            name: 'class',
            placeholder: 'Class',
            text: 'Class'
          },
        buttonArrayAdd:
          {
            id: 1,
            name: 'Add class'
          },
        types: [
          {
            id: 1,
            name: 'Exam'
          },
          {
            id: 2,
            name: 'Credit'
          },
          {
            id: 3,
            name: 'None'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .selectors{
    margin: 10px auto;
    width: 30%;
  }

  select{
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
    width: 60%;
  }
</style>
