<template>
  <div class="mt-6">
    <button
      class="
        text-color-primary
        py-3
        px-7
        border-color-primary
        rounded-3xl
        border
      "
      @click="show = true"
      v-if="!show"
    >
      Subscribe
    </button>

    <form @submit.prevent="" class="" v-if="show">
      <input
        class="
          w-full
          h-12
          rounded-3xl
          lg:max-w-full
          max-w-sm
          mb-5
          px-5
          border border-color-primary
          text-color-primary
          placeholder-color-primary placeholder-opacity-20
          pb-px
          bg-color-dark
          outline-none
        "
        type="text"
        placeholder="Name"
        required
      />
      <input
        class="
          w-full
          h-12
          rounded-3xl
          lg:max-w-full
          max-w-sm
          mb-5
          px-5
          border border-color-primary
          text-color-primary
          placeholder-color-primary placeholder-opacity-20
          pb-px
          bg-color-dark
          outline-none
        "
        type="email"
        placeholder="Email"
        required
      />
      <button
        class="
          block
          w-full
          h-12
          bg-color-primary
          lg:max-w-full
          max-w-sm
          rounded-3xl
          text-color-dark
          px-5
        "
        type="submit"
      >
        Subscribe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "subscribe-footer",
  data() {
    return {
      show: false,
    };
  },
};
</script>

