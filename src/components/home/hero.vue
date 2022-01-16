<template>
  <div
    class="
      hero
      relative
      h-screen
      flex
      py-6
      justify-end
      flex-col
      align-bottom
    "
  >
    <!-- <img src="@/assets/svg/circle_1.svg" class="" alt="" />
    <img src="@/assets/svg/circle_2.svg" alt="" />
    <img src="@/assets/svg/circle_3.svg" alt="" />
    <img src="@/assets/svg/logo.svg" alt="" /> -->
    <div class="flex w-full h-full lg:items-center md:items-center md:w-1/2 md:ml-20 lg:ml-20 lg:mt-40 md:mt-40">
      <logo-big />
    </div>
    <iframe
      height="45%"
      class="absolute lg:top-32 md:top-32 sm:top-3/4 md:w-iframe-video-width lg:w-iframe-video-width sm:left-0 lg:left-1/2 md:left-1/2 sm:w-full"
      src="https://www.youtube.com/embed/ewQO72rKlIw"
    >
    </iframe>
    <div class="relative text-center">
      <button
        class="
          inline-block
          border border-color-dark
          py-3
          px-6
          rounded-3xl
          relative
          text-color-dark
          bg-color-primary
          font-semibold
          z-40
        "
        @click.prevent="scrollDown"
      >
        Scroll down
      </button>
    </div>
  </div>
</template>

<script>
import logoBig from "../common/logo-big.vue";
export default {
  components: { logoBig },
  name: "hero",
  data() {
    return {};
  },
  methods: {
    scrollDown() {
      const el = document.getElementById("about");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
// .logo {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 100%;
//   transform: translate(-50%, -50%);
//   z-index: 2;

//   svg {
//     width: 100%;
//     #ring-1 {
//       animation: yourAnimation 20s linear 0s infinite reverse none;
//       transform-origin: center center;
//     }
//     #ring-2 {
//       animation: yourAnimation 20s linear 0s infinite normal none;
//       transform-origin: center center;
//     }
//     #ring-3 {
//       animation: yourAnimation 20s linear 0s infinite normal none;
//       transform-origin: center center;
//     }
//   }
// }

// @keyframes yourAnimation {
//   0.0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
</style>

