<template>
  <div>
    <p>Add task</p>
    <ul v-if="addTask">
      <CustomInput
        :key="addTask.id"
        :todo="addTask"
      />
    </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
    <ul>
      <CustomTextArea v-for="el in taskContent"
                      :key="el.id"
                      :todo="el"/>
    </ul>
    <CustomDate/>
    <p>А тут будут звездочки</p>
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
  import CustomTextArea from './CustomTextArea.vue'
  import CustomDate from './CustomDate.vue'

  let nextTodoId = 1

  export default {
    components: {
      CustomDate, CustomInput, Buttons, CustomTextArea
    },
    data() {
      return {
        addTask:
          {
            id: 1,
            name: 'subject',
            placeholder: 'Subject',
            text: 'Subject'
          },
        taskContent: [
          {
            id: 1,
            name: "summary",
            placeholder: "",
            text: "Summary"
          }, {
            id: 2,
            name: "description",
            placeholder: "",
            text: "Description"
          }
        ],
        buttonArrayAdd:
          {
            id: 1,
            name: 'Add task'
          }
      }
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
</style>
