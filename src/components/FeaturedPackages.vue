<template>
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
</template>

<script>
import FeaturedPackage from "@/components/FeaturedPackage.vue";

export default {
  name: "featured-packages",
  components: {
    FeaturedPackage
  }
};
</script>

<style scoped>
.packages-container {
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
}

.packages-container div {
  margin: 0px 2px;
}
</style>