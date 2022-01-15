<template>
  <section
    id="about"
    class="bg-color-primary md:py-44 py-32 relative overflow-hidden"
  >
    <div class="container mx-auto text-center px-3 z-10 relative">
      <h1 class="text-5xl font-semibold uppercase mb-16">About Us</h1>
      <vueper-slides autoplay class="no-shadow">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
        />
      </vueper-slides>
    </div>
  </section>
</template>

<script>
// import subscribe from "../dialogs/subscribe.vue";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  // components: { subscribe },
  components: { VueperSlides, VueperSlide },
  name: "about",
  // data() {
  //   return {};
  // },
  data: () => ({
    slides: [
      {
        title: "",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        image: require('./images/top-slider/1.jpg'),
      },
      {
        title: "",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        image: require('./images/top-slider/2.jpg'),
      },
    ],
  }),
};
</script>

