<template>
  <div>
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
</style>
