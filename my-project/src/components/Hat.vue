<template>
  <div class="hat">
    <div class="left-side-hat">
      <div class="section">Timetable</div>
      <router-link to="/tasks"><div class="section" id="no-borders">Tasks</div></router-link>
    </div>
    <div class="right-side-hat">
      <router-link to="/"><div class="section">Log out</div></router-link>
      <router-link to="/profile"><div class="section">Profile</div></router-link>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .left-side-hat{
  }
  .right-side-hat{
  }
  .hat {
    background-color: #d8e5ff;
    display: flex;
    margin: 0 auto;
    width: 70%;
    justify-content: space-between;
  }

  .section {
    color: rgba(255,255,255,0.8);
    display: inline-block;
    text-align: center;
    font-size: 150%;
    padding: .3em 0.5em;
    cursor: pointer;
    text-transform: uppercase;
  }

  .section:hover {
    color: rgba(255,255,255,1);
  }

</style>
