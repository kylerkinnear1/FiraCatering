<template>
  <div>
    <h2>{{ title }}</h2>
    <img :src="require('@/assets/images/pulled-pork-packages.png')" />
    <button class="button-primary">BOOK at {{ price }}/person</button>
  </div>
</template>

<script>
export default {
  name: "featured-package",
  props: {
    title: String,
    price: String
  }
};
</script>

<style scoped>
div {
  background: white;
  display: inline-block;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}

h2 {
  font-family: "Roboto";
  font-weight: lighter;
  text-align: center;
}

img {
  display: block;
  margin: 5px 10px;
}

button {
  width: calc(100% - 20px);
  margin: 0px 10px 20px 10px;
}
</style>
