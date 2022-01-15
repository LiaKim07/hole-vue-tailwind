<template>
  <section id="roadMap" class="bg-color-secondary pb-44 relative">
    <logo-road-map @data="changeData" class="mb-10" alt="" />
    <div class="container mx-auto">
      <div class="overflow-hidden w-full relative">
        <swiper class="swiper-no-swiping" ref="mySwiper" :options="settings">
          <template v-for="(item, idx) in roadMap">
            <swiper-slide :key="idx">
              <div class="max-h-0 duration-500" ref="targetHover">
                <div class="flex px-16 gap-5 justify-evenly items-center flex-wrap">
                  <div v-for="(stage, idx) in item.stages" :key="idx">
                    <h3 class="text-3xl font-semibold uppercase mb-4 text-center">
                      {{ stage.title }}
                    </h3>
                    <p>
                      {{ stage.description }}
                    </p>
                  </div>
                  <div class="w-full text-center mt-2">
                    <div
                      class="inline-block border border-dashed border-color-dark rounded-2xl text-4xl px-4 pt-1 pb-2 mx-auto"
                    >
                      {{ item.daysLeft }} Days off
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import logoRoadMap from "../common/logo-road-map.vue";
export default {
  name: "road-map",
  components: { logoRoadMap },
  data() {
    return {
      mInfo: false,
      mDate: null,
      mActive: null,
      settings: {
        slidesPerView: 1,
        freeMode: false,
        loop: true,
      },
      roadMap: [
        {
          daysLeft: 15,
          stages: [],
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
    let info = this;
    let mountTrue;
    mountTrue = await new XMLHttpRequest();
    mountTrue.open(
      "get",
      "https://dyn.trigan.org/api/milestone/getAll?apiKey=ABC123"
    );
    mountTrue.setRequestHeader("Accept", "application/json");
    mountTrue.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    mountTrue.send();
    mountTrue.onreadystatechange = function () {
      if (mountTrue.readyState === XMLHttpRequest.DONE) {
        // eslint-disable-next-line no-unused-vars
        let response = JSON.parse(mountTrue.response);
        info.roadMap[0].stages = response.Data;
      }
    };
  },
  methods: {
    changeData(value) {
      this.$refs.mySwiper.$swiper.slideTo(value, 1, false); // 1ms
    },
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
  @media (max-width: 641px) {
    max-width: 15%;
  }
  width: 64px !important;
  height: 64px !important;
}
</style>
