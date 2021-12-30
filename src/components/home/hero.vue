<template>
  <div
    class="
      hero
      relative
      overflow-hidden
      flex
      justify-end
      items-center
      flex-col
      align-bottom
    "
  >
    <img src="@/assets/svg/circle_1.svg" class="" alt="" />
    <img src="@/assets/svg/circle_2.svg" alt="" />
    <img src="@/assets/svg/circle_3.svg" alt="" />
    <img src="@/assets/svg/logo.svg" alt="" />
    <div class="mb-24 relative">
      <router-link
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
        to="#about"
      >
        Scroll down
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero {
  height: 1100px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left right;

    &:first-child {
      animation: yourAnimation 20s linear 0s infinite reverse none;
    }
    &:nth-child(2) {
      animation: yourAnimation 20s linear 0s infinite normal none;
    }
    &:nth-child(3) {
      animation: yourAnimation 20s linear 0s infinite normal none;
    }
  }
}

@keyframes yourAnimation {
  0.0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>

