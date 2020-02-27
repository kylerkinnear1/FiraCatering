<template>
  <div class="container">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <div class="contact-card-container">
        <img src="@/assets/images/contact-us-highlight.jpg" />
        <form>
          <label for="customer-name">Name</label>
          <input type="text" id="customer-name" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-page"
};
</script>

<style scoped>
.container {
  background-image: url("~@/assets/images/contact-us-background.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: var(--nav-bar-height);
  padding: 800px 100px 100px 100px;
}

.contact-card {
  background: white;
  text-align: center;
}
h1 {
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: lighter;
  padding: 40px;
  font-size: 40pt;
}

img {
  transform: scale(0.62);
  transform-origin: 0 0;
}

.contact-card-container {
  display: flex;
  justify-content: center;
}

label {
  font-family: "Roboto";
  font-weight: lighter;
  text-transform: uppercase;
  display: block;
}

input {
  display: block;
}
</style>
