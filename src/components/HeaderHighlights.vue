<template>
  <div>
    <button class="button-primary" @click="$router.push('menu')">Explore Menu</button>
    <button class="button-secondary" @click="$router.push('contact')">Make a Reservation</button>
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
  margin: 10px;
  transform: translateY(-50%);
}
</style>
