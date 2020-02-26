<template>
  <div class="container">
    <div class="background" :class="hasScrolledDown ? 'background-opaque' : ''" />
    <router-link to="/home">
      <img src="@/assets/images/fira-logo.png" />
    </router-link>
    <nav>
      <ul>
        <router-link to="/menu">
          <li>Menu</li>
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
    this.updateHasScrolledDown();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.updateHasScrolledDown();
    },
    updateHasScrolledDown() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.hasScrolledDown = currentScrollPosition >= 50;
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

img:hover {
  filter: brightness(110%);
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
  color: black;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  outline: none;
}

li {
  display: inline;
  margin: 25px 30px 25px 30px;
  text-transform: uppercase;
  font-family: "Roboto";
  z-index: 1;
}
</style>
