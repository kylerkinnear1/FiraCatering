<template>
  <div id="app">
    <div class="nav-bar-container">
      <nav-bar />
    </div>
    <div class="background-image" />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

body {
  margin: 0px;
  color: #4f4f4f;
  background-image: url("~@/assets/images/home-page-background.jpg");
  background-repeat: no-repeat;
  background-size: auto;
}

button {
  border: none;
  font-size: 16pt;
  box-shadow: 0px 1px 2px black;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
<style scoped>
.nav-bar-container {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.content-container {
  position: absolute;
  top: 180px;
  width: 100%;
}
</style>
