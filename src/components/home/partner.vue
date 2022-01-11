<template>
  <section
    id="partner"
    class="bg-color-primary pt-12 xl:pb-52 lg:pb-52 md:pb-36 sm:pb-32 pb-10"
  >
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-24 text-center">Team</h1>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-14">
        <template v-for="(val, index) in response">
          <div
            :key="index"
            class="text-center relative hover:cursor-pointer"
            @mouseover="showModal(index)"
          >
            <div class="mx-auto">
              <img
                :src="val.image"
                class="h-48 w-48 mx-auto hover:cursor-pointer rounded-full"
                alt=""
              />
            </div>
            <div>
              <h4 class="text-color-dark text-2xl font-bold mt-4">
                {{ val.name }}
              </h4>
              <h4 class="text-color-dark text-lg font-medium mt-2">
                {{ val.title }}
              </h4>
              <h4 class="text-color-dark text-sm">
                {{ val.shortDescription }}
              </h4>
              <ul class="text-color-dark text-xl font-medium mt-2 flex">
                <a class="p-2 ml-auto" :href="val.socialLinks.facebook"
                  ><font-awesome-icon :icon="['fab', 'facebook-square']"
                /></a>
                <a class="p-2" :href="val.socialLinks.instagram"
                  ><font-awesome-icon :icon="['fab', 'instagram-square']"
                /></a>
                <a class="p-2 mr-auto" :href="val.socialLinks.youtube"
                  ><font-awesome-icon :icon="['fab', 'youtube-square']"
                /></a>
              </ul>
            </div>

            <div
              v-if="index === openedModal"
              class="absolute mt-56 z-40 top-0 border left-0 w-full p-4 h-72 rounded-xl bg-color-primary shadow"
            >
              tes
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
// import Modal from "../common/Modal.vue";
export default {
  name: "partner",
  // components: { Modal },
  data() {
    return {
      response: {},
      openedModal: null,
    };
  },
  methods: {
    showModal(index) {
      console.log(index);
      this.openedModal = index;
    },
    hideModal() {
      this.$emit("closeModal");
    },
  },
  async created() {
    // eslint-disable-next-line no-unused-vars
    let info = this;
    let mountTrue;
    mountTrue = await new XMLHttpRequest();
    mountTrue.open(
      "get",
      "https://dyn.trigan.org/api/teammember/getAll?apiKey=ABC123"
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
        info.response = response.Data;
      }
    };
  },
};
</script>
