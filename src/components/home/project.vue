<template>
  <section id="project" class="bg-color-secondary relative">
    <h1
      class="text-5xl font-semibold uppercase text-center pt-12 absolute w-full"
    >
      Project
    </h1>
    <div class="flex items-center">
      <div class="hidden md:block">
        <img src="@/assets/svg/project.svg" alt="" srcset="" />
      </div>
      <div
        class="text-center md:pt-28 pt-40 pb-28 md:pr-3 mx-auto"
        style="width: 100%; max-width: 430px"
      >
        <h4 class="text-2xl mb-6 text-color-dark">Project name</h4>
        <p class="font-semibold text-color-dark">
          Here are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. <br /><br />
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <button
          class="
            text-color-dark
            py-3
            px-5
            border-color-dark
            rounded-3xl
            border
            bg-color-primary
            mt-6
          "
        >
          Read more
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "project",
  data() {
    return {};
  },
};
</script>

