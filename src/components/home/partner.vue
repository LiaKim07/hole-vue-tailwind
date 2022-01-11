<template>
  <section
    id="partner"
    class="bg-color-primary pt-12 xl:pb-52 lg:pb-52 md:pb-36 sm:pb-32 pb-10"
  >
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-24 text-center">Team</h1>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        <template v-for="(val, index) in response">
          <div :key="index" class="relative hover:cursor-pointer">
            <div class="mx-auto">
              <img
                @mouseover="showModal(index)"
                :src="val.image"
                class="h-48 w-48 mx-auto hover:cursor-pointer rounded-full"
                alt=""
              />
            </div>
            <div class="text-center">
              <h4 class="text-color-dark text-2xl font-bold mt-4">
                {{ val.name }}
              </h4>
              <h4 class="text-color-dark text-lg font-medium mt-2">
                {{ val.title }}
              </h4>
              <h4 class="text-color-dark text-sm">
                {{ val.shortDescription }}
              </h4>
              <div>
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
            </div>

            <div
              v-if="index === openedModal"
              class="absolute mt-48 z-40 top-0 left-0 w-full p-4 h-auto rounded-xl bg-white shadow"
            >
              <svg
                class="-mt-8 mx-auto"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 0L21.3923 18H0.607696L11 0Z" fill="white" />
              </svg>

              <div
                class="flex border-b mt-6 pb-4 border-color-primary inline-block gap-2"
              >
                <img
                  :src="val.image"
                  class="h-12 w-12 object-cover rounded-full"
                  alt=""
                />
                <div>
                  <h3 class="block capitalize font-bold">
                    {{ val.title }}
                  </h3>
                  <div
                    class="text-color-dark text-xl font-medium flex inline-block gap-2"
                  >
                    <a class="" :href="val.socialLinks.facebook"
                      ><font-awesome-icon :icon="['fab', 'facebook-square']"
                    /></a>
                    <a class="" :href="val.socialLinks.instagram"
                      ><font-awesome-icon :icon="['fab', 'instagram-square']"
                    /></a>
                    <a class="" :href="val.socialLinks.youtube"
                      ><font-awesome-icon :icon="['fab', 'youtube-square']"
                    /></a>
                  </div>
                </div>
              </div>
              <p class="text-left text-sm mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam officiis error placeat cupiditate ab consectetur unde
                voluptatibus, debitis minima ratione recusandae corporis
                consequuntur eius labore. Enim inventore reprehenderit
                temporibus quas.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam officiis error placeat cupiditate ab consectetur unde
                voluptatibus, debitis minima ratione recusandae corporis
                consequuntur eius labore. Enim inventore reprehenderit
                temporibus quas.
              </p>
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
      openedModal: 1,
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
