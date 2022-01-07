<template>
  <section id="project" class="bg-color-secondary relative">
    <div>
      <h1
        class="text-5xl font-semibold uppercase text-center pt-10 w-full"
      >
        Project
      </h1>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-around">
      <div class="flex md:pl-6"> 
        <logo-medium :projectJSON="projectJSON" @show-detail="detail"/>
      </div> 
      <div class="flex flex-col text-center mx-auto p-2" style="width: 100%; max-width: 430px" >
        <h4 class="text-2xl mb-6 text-color-dark">{{ projectName }}</h4>
        <p class="font-semibold whitespace-pre-wrap text-color-dark">{{projectDesc}}</p>
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

import logoMedium from "../common/logo-medium.vue";
export default {  
  components: { logoMedium },
  name: "project",
  data() {
    return {
      projectDesc: '',
      projectName: '',
      projectJSON: [
        {
          name:'Project 1',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
        {
          name:'Project 2',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
        {
          name:'Project 3',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
        {
          name:'Project 4',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
        {
          name:'Project 5',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
        {
          name:'Project 6',
          description: `Here are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\n \nAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        },
      ]
    };
  },

  methods: {
    detail(value){
       this.projectName = value.name;
       this.projectDesc = value.description;
    }
  },

  created(){
    this.projectName = this.projectJSON[0].name
    this.projectDesc = this.projectJSON[0].description
  }

};
</script>

