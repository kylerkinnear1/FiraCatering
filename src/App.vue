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

:root {
  --nav-bar-height: 180px;
}

body {
  margin: 0px;
  color: #4f4f4f;
}

button {
  border: none;
  font-size: 16pt;
  box-shadow: 0px 1px 2px black;
  text-transform: uppercase;
  cursor: pointer;
}

.button-primary {
  padding: 15px;
  background: linear-gradient(#ffa00a, #ff6e03);
  color: white;
  text-shadow: 0px 0px 3px #991800;
}

.button-primary:hover,
.button-primary:focus {
  background: linear-gradient(#ffc315, #ff7403);
  outline: none;
}

.button-secondary {
  padding: 15px;
  background: white;
  color: #4f4f4f;
}

.button-secondary:hover,
.button-secondary:focus {
  background: linear-gradient(white, #cecece);
  outline: none;
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
  width: 100%;
}
</style>
