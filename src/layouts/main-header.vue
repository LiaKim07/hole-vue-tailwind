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
      <a class="md:mx-8 mx-3" href="#about"> About Us </a>
      <a class="md:mx-8 mx-3" href="#project"> Project </a>
      <a class="md:mx-8 mx-3" href="#partner"> Partner </a>
      <a class="md:mx-8 mx-3" href="#roadMap"> Road Map </a>
      <a class="md:mx-8 mx-3" href="#contact"> Contact </a>
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