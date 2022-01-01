<template>
  <section id="roadMap" class="bg-color-secondary pb-44 relative">
    <h1
      class="
        text-5xl
        pt-12
        font-semibold
        uppercase
        text-center
        absolute
        w-full
        left-0
        top-0
      "
    >
      RoadMap
    </h1>
    <img src="@/assets/svg/section_line.svg" class="mb-10" alt="" />
    <div class="container mx-auto">
      <div class="overflow-hidden w-full relative">
        <swiper ref="mySwiper" :options="settings">
          <template v-for="(item, idx) in roadMap">
            <swiper-slide :key="idx" class="">
              <div
                class="flex px-16 gap-5 justify-evenly items-center flex-wrap"
              >
                <div v-for="(stage, idx) in item.stages" :key="idx">
                  <h3 class="text-3xl font-semibold uppercase mb-4 text-center">
                    {{ stage.title }}
                  </h3>
                  <ul>
                    <li
                      class="mb-4 flex items-center"
                      v-for="(perk, idx) in stage.perks"
                      :key="idx"
                    >
                      <div class="mr-4">
                        <img
                          v-if="perk.available"
                          src="@/assets/svg/selected.svg"
                        />
                        <img v-else src="@/assets/svg/unselected.svg" />
                      </div>
                      <div class="text-2xl font-semibold">
                        {{ perk.line1 }} <br />
                        {{ perk.line2 }}
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="w-full text-center mt-2">
                  <div
                    class="
                      inline-block
                      border border-dashed border-color-dark
                      rounded-2xl
                      text-4xl
                      px-4
                      pt-1
                      pb-2
                      mx-auto
                    "
                  >
                    {{ item.daysLeft }} Days off
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>

          <div
            class="swiper-button-prev"
            slot="button-prev"
            @click="$refs.mySwiperRef.$swiper.slidePrev()"
            v-if="settings && settings.navigation"
          >
            <img src="@/assets/svg/left_arrow.svg" alt="" />
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
            @click="$refs.mySwiperRef.$swiper.slideNext()"
            v-if="settings && settings.navigation"
          >
            <img src="@/assets/svg/right_arrow.svg" alt="" />
          </div>
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
        slidesPerView: 1,
        freeMode: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        loop: true,
      },
      roadMap: [
        {
          daysLeft: 15,
          stages: [
            {
              title: "Stage 1",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: true,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: true,
                },
              ],
            },
            {
              title: "Stage 2",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                },
              ],
            },
            {
              title: "Stage 3",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                },
              ],
            },
          ],
        },
        {
          daysLeft: 23,
          stages: [
            {
              title: "Stage 1",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: true,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: true,
                },
              ],
            },
            {
              title: "Stage 2",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                },
              ],
            },
            {
              title: "Stage 3",
              perks: [
                {
                  line1: "6,000",
                  line2: "Holders",
                  available: true,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.swiper-button-next:after,
.swiper-button-prev:after {
  display: none !important;
}

.swiper-button-next,
.swiper-button-prev {
  width: 64px !important;
  height: 64px !important;
}
</style>

