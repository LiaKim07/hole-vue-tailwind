<template>
  <section id="roadMap" class="bg-color-secondary pt-12 pb-44">
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-64 text-center">
        RoadMap
      </h1>

      <div class="overflow-hidden w-full">
        <swiper ref="mySwiper" :options="settings">
          <swiper-slide class="bg-color-dark">Slide 1</swiper-slide>
          <swiper-slide class="bg-color-dark">Slide 2</swiper-slide>
          <swiper-slide class="bg-color-dark">Slide 3</swiper-slide>
          <swiper-slide class="bg-color-dark">Slide 4</swiper-slide>
          <swiper-slide class="bg-color-dark">Slide 5</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "road-map",

  data() {
    return {
      settings: {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        loop: true,
      },
    };
  },
};
</script>

