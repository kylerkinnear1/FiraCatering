<template>
  <div class="container">
    <header-highlights />
    <featured-packages />
  </div>
</template>

<script>
import HeaderHighlights from "@/components/HeaderHighlights.vue";
import FeaturedPackages from "@/components/FeaturedPackages.vue";

export default {
  name: "home-page",
  components: { HeaderHighlights, FeaturedPackages }
};
</script>

<style scoped>
.container {
  background-image: url("~@/assets/images/home-page-background.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  padding-top: var(--nav-bar-height);
}
</style>
