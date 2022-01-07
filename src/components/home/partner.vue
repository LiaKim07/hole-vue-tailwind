<template>
  <section
    id="partner"
    class="bg-color-primary pt-12 xl:pb-52 lg:pb-52 md:pb-36 sm:pb-32 pb-10"
  >
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-24 text-center">
        Partners
      </h1>

      <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-14">
        <template v-for="(i, idx) in 6">
          <div :key="idx" class="text-center">
            <div
              class="mx-auto overflow-hidden rounded-full relative"
              style="max-width: 192px; height: 192px"
            >
              <img
                src="@/assets/images/img_placeholder.png"
                class="
                  w-full
                  h-full
                  absolute
                  object-cover
                  top-0
                  left-0
                  bg-center
                "
                alt=""
              />
            </div>
            <h4 class="text-color-dark text-2xl font-medium mt-10">Partner</h4>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "partner",
  data() {
    return {};
  },
};
</script>

