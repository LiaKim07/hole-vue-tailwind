<template>
  <section
      id="partner"
      class="bg-color-primary pt-12 xl:pb-52 lg:pb-52 md:pb-36 sm:pb-32 pb-10"
  >
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-24 text-center">
        Team
      </h1>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-14">
        <template v-for="(val, index) in response">
          <div :key="index" class="text-center" @click="showModal(index)">
            <div
                class="mx-auto overflow-hidden rounded-full relative"
                style="max-width: 192px; height: 192px"
            >
              <img
                  :src="val.image"
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
            <h4 class="text-color-dark text-2xl font-medium mt-5 bold">{{val.name}}</h4>
            <h4 class="text-color-dark text-2xl font-medium mt-5 bold">{{val.title}}</h4>
            <h4 class="text-color-dark text-xl font-medium mt-4">{{val.shortDescription}}</h4>
            <ul class="text-color-dark text-xl font-medium mt-2 flex">
              <a class="p-2 ml-auto" :href="val.socialLinks.facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
              <a class="p-2" :href="val.socialLinks.instagram"><font-awesome-icon :icon="['fab', 'instagram-square']" /></a>
              <a class="p-2 mr-auto" :href="val.socialLinks.youtube"><font-awesome-icon :icon="['fab', 'youtube-square']" /></a>
            </ul>
            <Modal :id="index" v-show="openedModal === index" @close="hideModal()">
              <template v-slot:header>
                <h1 class="text-xl">{{val.name}}</h1>
              </template>
              <template v-slot:body>
                <div class="grid sm:grid-cols-2 gap-14">
                      <div
                        class="mx-auto overflow-hidden rounded-full relative"
                        style="max-width: 192px; height: 192px"
                      >
                        <img
                            :src="val.image"
                            class="object-cover w-full h-full"
                        />
                    </div>
                    <div class="text-left">
                      <h2>{{val.title}}</h2>
                      <p>
                        {{val.longDescription}}
                      </p>
                    </div>
                </div>
              </template>
              <template v-slot:footer>
                <ul class="flex align-center justify-end">
                  <li><h4 class="text-color-dark text-m font-medium mt-2 ml-auto mr-4"><a :href="val.socialLinks.facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a></h4></li>
                  <li><h4 class="text-color-dark text-m font-medium mt-2"><a :href="val.socialLinks.instagram"><font-awesome-icon :icon="['fab', 'instagram-square']" /></a></h4></li>
                  <li><h4 class="text-color-dark text-m font-medium mt-2"><a :href="val.socialLinks.youtube"><font-awesome-icon :icon="['fab', 'youtube-square']" /></a></h4></li>
                </ul>
              </template>
            </Modal>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from '../common/Modal.vue'
export default {
  name: "partner",
  components: {Modal},
  data() {
    return {
      response: {},
      openedModal: null
    };
  },
  methods: {
    showModal(index) {
      this.openedModal = index
    },
    hideModal() {
      console.log(this)
      this.openedModal = null
      this.$emit('closeModal')
    }
  },
  async created() {

    // eslint-disable-next-line no-unused-vars
    let info = this
    let mountTrue
    mountTrue = await new XMLHttpRequest();
    mountTrue.open("get" , "https://dyn.trigan.org/api/teammember/getAll?apiKey=ABC123");
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
        info.response = response.Data
      }
    }
  }
}
</script>

