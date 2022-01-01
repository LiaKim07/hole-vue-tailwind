<template>
  <footer class="bg-color-dark text-color-primary pt-20 pb-52">
    <div class="container mx-auto px-3">
      <div class="grid grid-cols-12 gap-2 max-w-5xl mx-auto">
        <template v-for="(item, idx) in nav">
          <ul
            :key="idx"
            class="
              xl:col-span-2
              lg:col-span-2
              md:col-span-3
              sm:col-span-6
              col-span-6
              lg:order-1
              order-2
            "
          >
            <li class="text-2xl mb-6" v-if="item.title">{{ item.title }}</li>
            <li
              class="font-semibold mb-4"
              v-for="(link, idx) in item.links"
              :key="idx"
            >
              <router-link :to="link.path">{{ link.text }}</router-link>
            </li>
          </ul>
        </template>

        <div class="lg:col-span-4 col-span-12 lg:order-2 order-1 lg:mb-0 mb-6">
          <ul class="flex gap-6 mb-7">
            <li v-for="(link, idx) in socialLinks" :key="idx">
              <a
                :href="link.path"
                class="
                  border border-color-primary
                  rounded-full
                  block
                  w-12
                  h-12
                  flex
                  justify-center
                  items-center
                "
                ><i :class="link.icon" class="text-2xl"></i
              ></a>
            </li>
          </ul>

          <p>
            Subscribe to the newsletter to hear about Trigan updates and events.
          </p>

          <subscribe-footer />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import subscribeFooter from "../components/common/subscribe-footer.vue";
export default {
  components: { subscribeFooter },
  name: "main-footer",
  data() {
    return {
      nav: [
        {
          title: "General",
          links: [
            {
              text: "About",
              path: "#",
            },
            {
              text: "FAQ",
              path: "#",
            },
            {
              text: "Build",
              path: "#",
            },
            {
              text: "Careers",
              path: "#",
            },
          ],
        },
        {
          title: "Technology",
          links: [
            {
              text: "Technology",
              path: "#",
            },
            {
              text: "Roadmap",
              path: "#",
            },
            {
              text: "Token",
              path: "#",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              text: "Contact us",
              path: "#",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              text: "Forum",
              path: "#",
            },
            {
              text: "Discord",
              path: "#",
            },
          ],
        },
      ],
      socialLinks: [
        {
          icon: "fab fa-twitter",
          path: "#",
        },
        {
          icon: "fab fa-facebook",
          path: "#",
        },
        {
          icon: "fab fa-instagram",
          path: "#",
        },
        {
          icon: "fab fa-linkedin",
          path: "#",
        },
        {
          icon: "fab fa-github",
          path: "#",
        },
      ],
    };
  },
};
</script>