<template>
  <section
      id="partner"
      class="bg-color-primary pt-12 xl:pb-52 lg:pb-52 md:pb-36 sm:pb-32 pb-10"
  >
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold uppercase mb-24 text-center">
        Partners
      </h1>

      <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-14">
        <template v-for="val in response">
          <div :key="val" class="text-center">
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
            <h4 class="text-color-dark text-2xl font-medium mt-10">{{val.backgroundInformation}}</h4>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "partner",
  data() {
    return {
      response: {}
    };
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

