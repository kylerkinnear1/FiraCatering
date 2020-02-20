<template>
  <div>
    <button class="explore-menu">Explore Menu</button>
    <button class="check-availability">Make a Reservation</button>
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
  height: calc(100vh - 180px);
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

.explore-menu:hover {
  background: linear-gradient(#ffc315, #ff7403);
}

.check-availability {
  background: white;
  color: inherit;
}

.check-availability:hover {
  background: linear-gradient(white, #cecece);
}
</style>
