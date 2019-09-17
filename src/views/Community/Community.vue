<template>
  <div class="community">
    <head-search></head-search>
    <com-movie></com-movie>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import HeadSearch from "./components/Home/Search.vue";
import ComMovie from "./components/Home/Movie.vue";

export default {
  name: "community",
  components: {
    Footer,
    HeadSearch,
    ComMovie
  }
};
</script>

<style scoped lang="scss">
.community {
  height: 100%;
}
</style>
