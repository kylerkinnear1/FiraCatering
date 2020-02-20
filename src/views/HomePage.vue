<template>
  <div>
    <header-highlights />
    <div class="packages-container">
      <div>
        <featured-package title="Basic" price="$7.99" />
      </div>
      <div>
        <featured-package title="Classic" price="$9.99" />
      </div>
      <div>
        <featured-package title="Deluxe" price="$21.99" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHighlights from "@/components/HeaderHighlights.vue";
import FeaturedPackage from "@/components/FeaturedPackage.vue";

export default {
  name: "home-page",
  components: { HeaderHighlights, FeaturedPackage }
};
</script>

<style scoped>
.packages-container {
  margin: 0px 0px 200px 0px;
  display: flex;
  justify-content: center;
}

.packages-container div {
  margin: 0px 2px;
}
</style>
