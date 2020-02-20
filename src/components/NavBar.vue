<template>
  <div class="container">
    <div class="background" :class="hasScrolledDown ? 'background-opaque' : ''" />
    <router-link to="/home">
      <img src="@/assets/images/fira-logo.png" />
    </router-link>
    <nav>
      <ul>
        <router-link to="/home">
          <li>Home</li>
        </router-link>
        <router-link to="/menu">
          <li>Menu</li>
        </router-link>
        <router-link to="/corporate">
          <li>Corporate</li>
        </router-link>
        <router-link to="/wedding">
          <li>Wedding</li>
        </router-link>
        <router-link to="/about">
          <li>About</li>
        </router-link>
        <router-link to="/contact">
          <li>Contact Us</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return { hasScrolledDown: false };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.hasScrolledDown = currentScrollPosition >= 75;
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: -2;
  transition: background-color 0.3s ease-in-out;
}

.background-opaque {
  background-color: rgba(255, 255, 255, 0.97);
}

img {
  margin-left: 15px;
  transform: scale(0.8);
}

nav {
  position: absolute;
  right: 30px;
  bottom: 0px;
}

ul {
  list-style-type: none;
  font-size: 16pt;
  margin: 0px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: inherit;
  position: relative;
  height: 100%;
  transition: all 0.15s ease-in-out;
}
a:hover,
a:focus,
.router-link-active {
  color: white;
  text-shadow: 0px 0px 2px black;
  outline: none;
}

ul a::after,
ul .router-link-active::after {
  content: "";
  background: linear-gradient(#ffa00a, #ff6e03);
  position: absolute;
  top: -20px;
  left: 5px;
  right: 5px;
  bottom: -20px;
  z-index: -1;
  box-shadow: 0px 1px 2px black;
}

ul a::after {
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: scaleY(0);
  transform-origin: bottom;
}

ul a:hover::after,
ul .router-link-active::after {
  transform: scaleY(1);
  opacity: 1;
}

li {
  display: inline;
  margin: 25px 30px 25px 30px;
  text-transform: uppercase;
  font-family: "Roboto";
  z-index: 1;
}
</style>
