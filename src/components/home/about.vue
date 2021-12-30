<template>
  <section id="about" class="bg-color-primary py-44 relative overflow-hidden">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-semibold uppercase mb-16">About Us</h1>

      <p class="mb-14 max-w-xl mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>

      <p class="max-w-xl mx-auto mb-20">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <subscribe />
    </div>
  </section>
</template>

<script>
import subscribe from "../dialogs/subscribe.vue";
export default {
  components: { subscribe },
  name: "about",
  data() {
    return {};
  },
};
</script>

