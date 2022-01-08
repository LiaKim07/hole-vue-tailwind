<template>
  <section id="roadMap" class="bg-color-secondary pb-44 relative">
        <logo-road-map class="mb-10 " alt=""/> 
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
                  <p>
                    {{stage.description}}
                  </p>
<!--                  <ul>-->
<!--                    <li-->
<!--                      class="mb-4 flex items-center"-->
<!--                      v-for="(perk, idx) in stage.perks"-->
<!--                      :key="idx"-->
<!--                    >-->
<!--                      <div id="perk" class="lg:mr-4 relative max-h-6 lg:max-h-14 z-30 inline-flex">-->
<!--                        <img  -->
<!--                          v-if="perk.available"-->
<!--                          src=""-->
<!--                        />-->
<!--                        <img v-else src="@/assets/svg/unselected.svg" />-->
<!--                          &lt;!&ndash; <div class="relative" v-cloak v-show="perk.clicked">-->
<!--                            <div class="absolute top-0 z-10 w-24 p-2 -mt-1 text-sm text-center leading-tight text-black transform bg-white -translate-x-full -translate-y-full bg-orange-500 rounded-lg shadow-lg">-->
<!--                              More info-->
<!--                            </div>-->
<!--                            <svg fill="white" class="absolute z-10 w-6 h-6 transform -translate-x-7 -translate-y-3 stroke-2" width="8" height="8">-->
<!--                              <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />-->
<!--                            </svg>-->
<!--                          </div> &ndash;&gt;-->
<!--                      </div>-->
<!--                      <div class="lg:text-2xl text-md font-semibold">-->
<!--                        {{ perk.line1 }} <br />-->
<!--                        {{ perk.line2 }}-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
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
import logoRoadMap from "../common/logo-road-map.vue";
export default {
  name: "road-map",
  components:{ logoRoadMap },
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
          stages: []
          /*stages: [
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
          ],*/
        },
      ],
    };
  },
  async mounted() {

    // eslint-disable-next-line no-unused-vars
    let info = this
    let mountTrue
    mountTrue = await new XMLHttpRequest();
    mountTrue.open("get" , "https://dyn.trigan.org/api/milestone/getAll?apiKey=ABC123");
    mountTrue.setRequestHeader("Accept", "application/json");
    mountTrue.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    )
    mountTrue.send();
    mountTrue.onreadystatechange = function () {
      if (mountTrue.readyState === XMLHttpRequest.DONE) {
        // eslint-disable-next-line no-unused-vars
        let response = JSON.parse(mountTrue.response)
        console.log(response)
        info.roadMap[0].stages = response.Data
      }
    }
  }
};
</script>

<style lang="scss">
.swiper-button-next:after,
.swiper-button-prev:after {
  display: none !important;
}

.swiper-button-next,
.swiper-button-prev {
  @media (max-width:641px)  {
    max-width: 15%;
  }
  width: 64px !important;
  height: 64px !important;
} 


</style>

