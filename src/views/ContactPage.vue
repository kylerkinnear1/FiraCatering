<template>
  <div class="container">
    <div class="contact-card-container">
      <h1>Contact Us</h1>
      <div class="contact-card">
        <div class="image-container">
          <img src="@/assets/images/contact-us-highlight.jpg" />
        </div>
        <div class="form-container">
          <contact-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact-page",
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.container {
  background-image: url("~@/assets/images/contact-us-background.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: var(--nav-bar-height);
  padding: 750px 200px 20px 200px;
}

.contact-card-container {
  background: white;
  text-align: center;
}

.contact-card {
  display: flex;
}

.image-container {
  flex: 5;
  margin: 15px 0px 0px 80px;
}

.form-container {
  flex: 6;
  margin: 0px 80px 0px 80px;
}

h1 {
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: lighter;
  padding: 40px;
  font-size: 40pt;
}

img {
  width: 100%;
  height: auto;
  min-width: 450px;
}
</style>
