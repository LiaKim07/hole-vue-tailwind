<template>
  <div>
    <button
      @click="open = true"
      class="border border-color-dark py-3 px-16 rounded-3xl"
    >
      Subscribe
    </button>

    <transition name="slide-fade">
      <div
        class="
          dialog
          absolute
          top-0
          left-0
          w-full
          h-full
          flex flex-col
          justify-center
          z-0
        "
        v-if="open"
      >
        <div
          class="
            bg-color-dark bg-opacity-70
            w-full
            h-full
            top-0
            left-0
            absolute
            z-10
          "
          @click="open = false"
        ></div>
        <div class="bg-color-primary py-20 z-20">
          <h2 class="font-semibold text-color-dark text-4xl mb-6">
            Don't miss any updates
          </h2>
          <p class="font-semibold text-color-dark mb-5">
            Get the latest content and best deals in your inbox every day!
          </p>

          <form @submit.prevent="" class="">
            <input
              class="
                w-full
                max-w-xs
                h-12
                rounded-3xl
                mx-auto
                mb-5
                px-5
                border border-color-dark
                text-color-dark
                placeholder-color-dark placeholder-opacity-70
                pb-px
                bg-color-primary
              "
              type="email"
              placeholder="Email"
              required
            />
            <button
              class="
                block
                w-full
                max-w-xs
                h-12
                bg-color-dark
                rounded-3xl
                mx-auto
                text-color-primary
                px-5
              "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "subscribe",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>