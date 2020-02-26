<template>
  <div>
    <button class="explore-menu" @click="$router.push('menu')">Explore Menu</button>
    <button class="make-reservation" @click="$router.push('contact')">Make a Reservation</button>
  </div>
</template>

<script>
export default {
  name: "header-highlights"
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-bar-height));
}

button {
  width: 350px;
  padding: 15px;
  margin: 10px;
  transform: translateY(-50%);
}

.explore-menu {
  background: linear-gradient(#ffa00a, #ff6e03);
  color: white;
  text-shadow: 0px 0px 3px #991800;
}

.explore-menu:hover,
.explore-menu:focus {
  background: linear-gradient(#ffc315, #ff7403);
  outline: none;
}

.make-reservation {
  background: white;
  color: #4f4f4f;
}

.make-reservation:hover,
.make-reservation:focus {
  background: linear-gradient(white, #cecece);
  outline: none;
}
</style>
