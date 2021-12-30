<template>
  <div id="home" class="">
    <hero class="bg-color-secondary" />
    <about />
    <project />
    <partner />
    <road-map />
  </div>
</template>

<script>
import Hero from "../components/home/hero.vue";
import About from "../components/home/about.vue";
import Project from "../components/home/project.vue";
import Partner from "../components/home/partner.vue";
import RoadMap from "../components/home/road-map.vue";
export default {
  components: { Hero, About, Project, Partner, RoadMap },
  name: "Home",
};
</script>
