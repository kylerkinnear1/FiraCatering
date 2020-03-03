<template>
  <div class="container">
    <div class="contact-card">
      <h1>Contact Us</h1>
      <div class="contact-card-container">
        <img src="@/assets/images/contact-us-highlight.jpg" />
        <form>
          <div>
            <label for="customer-name">Name *</label>
            <input type="text" id="customer-name" />
          </div>
          <div>
            <label for="customer-email">Email *</label>
            <input type="text" id="customer-email" />
          </div>
          <div>
            <label for="customer-phone">Phone</label>
            <input type="text" id="customer-phone" />
          </div>
          <div class="share-line">
            <div class="share-line-item">
              <label for="event-type">Event Type</label>
              <input type="text" id="event-type" />
            </div>
            <div class="share-line-item">
              <label for="event-date">Event Date *</label>
              <input type="text" id="event-date" />
            </div>
          </div>
          <div>
            <label for="comments">Comments</label>
            <textarea type="text" id="comments" />
          </div>
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
  padding: 750px 200px 20px 200px;
}

.contact-card {
  background: white;
  text-align: center;
}

.contact-card-container {
  display: flex;
}

h1 {
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: lighter;
  padding: 40px;
  font-size: 40pt;
}

img {
  width: 583px;
  height: 437px;
  margin-left: 60px;
  margin-bottom: 100px;
}

form {
  width: 100%;
  margin: -5px 60px 0px 60px;
}

form div {
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-family: "Roboto";
  font-weight: lighter;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  font-size: 16pt;
  text-align: left;
}

div input,
div textarea {
  font-family: "Roboto";
  font-weight: lighter;
  font-size: 16pt;
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
}

div textarea {
  resize: none;
}

.share-line {
  display: flex;
  justify-content: space-between;
}

.share-line-item {
  position: relative;
  margin: 0px;
  width: calc(50% - 3px);
}

.share-line-item input {
  position: relative;
}

#comments {
  height: 100px;
}
</style>
