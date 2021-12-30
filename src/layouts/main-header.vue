<template>
  <nav
    class="
      absolute
      z-50
      top-0
      left-0
      w-full
      flex
      justify-center
      items-center
      pt-16
    "
  >
    <div class="px-2">
      <router-link class="mx-8" to="#about"> About Us </router-link>
      <router-link class="mx-8" to="#project"> Project </router-link>
      <router-link class="mx-8" to="#partner"> Partner </router-link>
      <router-link class="mx-8" to="#roadMap"> Road Map </router-link>
      <router-link class="mx-8" to="#contact"> Contact </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {};
  },
};
</script>