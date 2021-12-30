<template>
  <div id="app">
    <main-header />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "./layouts/main-header.vue";
import MainFooter from "./layouts/main-footer.vue";
export default {
  name: "app",
  components: { MainHeader, MainFooter },
};
</script>

<style lang="scss">
body {
  scroll-behavior: smooth;
}
</style>
