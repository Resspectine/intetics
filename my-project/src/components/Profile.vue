<template>
  <div>
    <div class="content">
      <Info :info="info"/>
      <div class="left-side">
        <b-table striped hover :items="items"></b-table>
        <div class="under">
          <div class="average">Average mark: 10.7;</div>
          <a href="edit"
             style="font-weight:600; margin-top:20px; margin-left:260px; font-size: 150%;">Edit
            Profile</a>
        </div>
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
        info:{name:'Anton'}
      }
    }
  }
  const items = [
    {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
    {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
    {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
    {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
  ]
</script>

<style scoped>



  .leftimg {
    float: left; /* Выравнивание по левому краю */
    margin-right: 150px; /* Отступы вокруг картинки */
  }

  .under {
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

  .left-side {
    width: 800px;
  }

  .content {
    display: flex;
  }
</style>
