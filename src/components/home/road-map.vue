<template>
  <section id="roadMap" class="bg-color-secondary pb-44 relative">
    <h1
      class="
        text-5xl
        lg:pt-12
        pt-2
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
                      <div id="perk" class="lg:mr-4 relative max-h-6 lg:max-h-14 z-30 inline-flex" @mouseover="perk.clicked = true" @mouseleave="perk.clicked = false">
                        <img  
                          v-if="perk.available"
                          src="@/assets/svg/selected.svg"
                        />
                        <img v-else src="@/assets/svg/unselected.svg" />
                          <div class="relative" v-cloak v-show="perk.clicked">
                            <div class="absolute top-0 z-10 w-24 p-2 -mt-1 text-sm text-center leading-tight text-black transform bg-white -translate-x-full -translate-y-full bg-orange-500 rounded-lg shadow-lg">
                              More info
                            </div>
                            <svg fill="white" class="absolute z-10 w-6 h-6 transform -translate-x-7 -translate-y-3 stroke-2" width="8" height="8">
                              <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />
                            </svg>
                          </div>
                      </div>
                      <div class="lg:text-2xl text-md font-semibold">
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
      mInfo: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: true,
                  clicked: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                  clicked: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                  clicked: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: true,
                  clicked: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: true,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                  clicked: false,
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
                  clicked: false,
                },
                {
                  line1: "Marketing Campaign",
                  line2: "(TikTok Twitter)",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "10,000",
                  line2: "Telegram members",
                  available: false,
                  clicked: false,
                },
                {
                  line1: "Merchant Website",
                  line2: "Integrations ",
                  available: false,
                  clicked: false,
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
#perk:hover{
  cursor: pointer;
}
</style>

