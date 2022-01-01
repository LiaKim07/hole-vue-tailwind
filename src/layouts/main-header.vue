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
      2xl:pt-16
      pt-10
    "
  >
    <div class="px-2">
      <router-link class="md:mx-8 mx-3" to="#about"> About Us </router-link>
      <router-link class="md:mx-8 mx-3" to="#project"> Project </router-link>
      <router-link class="md:mx-8 mx-3" to="#partner"> Partner </router-link>
      <router-link class="md:mx-8 mx-3" to="#roadMap"> Road Map </router-link>
      <router-link class="md:mx-8 mx-3" to="#contact"> Contact </router-link>
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