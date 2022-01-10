<template>

  <div id="hero" class="logo w-full">
    <div class="relative z-0">
    <div id="animate" class="bg-opacity-25 flex justify-center items-center">
     <logo-animate/>  
    </div>
      <div class="z-1000">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1346 1346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="main-logo" transform="translate(673, 673)"> 
            <g id="ring-3" :transform="rotationRing1">
              <circle
                id="Ellipse 22"
                cx="0"
                cy="0"
                r="550"
                stroke="black"
                stroke-dasharray="8"
              />
            </g>
            <g id="ring-1" :transform="rotationRing2">
              <circle
                id="Ellipse 23"
                cx="0"
                cy="0"
                r="437.5"
                stroke="black"
                stroke-dasharray="6"
              />
            </g>
            <g id="ring-2" :transform="rotationRing3">>
              <circle
                id="Ellipse 20"
                cx="0"
                cy="0"
                r="353.5"
                stroke="black"
                stroke-dasharray="4 4"
              />
            </g>
            
            <!-- <g id="logo" transform="translate(-673, -673)">
              <image v-show="!raw" style="cursor:pointer"
              x="440"
              y="440"
            href="trigan_logo_animation.svg"
            alt="triangle with all three sides equal"
            height="35%"
            width="35%" />
            </g> -->
            <g id="circle_1" @mouseleave="hoverRing1= false" :transform="trans1" @mouseover="hoverRing1= true" style="cursor:pointer; z-index:12">
              <a href="#about">
                <circle
                    class="dot2"
                    id="Ellipse 28"
                    cx="0"
                    cy="0"
                    r="25.5"
                    fill="#E4DACD"
                    stroke="black"
                    stroke-dasharray="8 8"
                  />
                <circle class="dot" style="fill:black" id="Ellipse 24" cx="0" cy="0" r="13"/> 
                <text id="text1" font-size="1.5em" stroke="#272727" x="0" y="0" stroke-width="2px">{{`.           .About Us`}}</text>
              </a>
            </g>
            <g id="circle_2" @mouseleave="hoverRing1= false" @mouseover="hoverRing1= true" :transform="trans2" style="cursor:pointer">
              <a href="#project">
                <circle
                  class="dot2"
                  id="Ellipse 28"
                  cx="0"
                  cy="0"
                  r="25.5"
                  fill="#E4DACD"
                  stroke="black"
                  stroke-dasharray="8 8"
                />
                <circle class="dot" style="fill:black" id="Ellipse 24" cx="0" cy="0" r="13"/> 
                <text id="text1" font-size="1.5em" stroke="#272727" x="0" y="0" stroke-width="2px">{{`.           .Project`}}</text>
              </a>
            </g>
            <g id="circle_3" @mouseleave="hoverRing2= false" @mouseover="hoverRing2= true" :transform="trans3" style="cursor:pointer">
              <a href="#partner">
                <circle
                  class="dot2"
                  id="Ellipse 28"
                  cx="0"
                  cy="0"
                  r="18.5"
                  fill="#E4DACD"
                  stroke="black"
                  stroke-dasharray="6 6"
                />
                <circle class="dot" style="fill:black" id="Ellipse 24" cx="0" cy="0" r="9"/> 
                <text id="text1" font-size="1.5em" stroke="#272727" x="0" y="0" stroke-width="2px">{{`.           .Partner`}}</text>
              </a>
            </g>
            <g id="circle_4" @mouseleave="hoverRing2= false" @mouseover="hoverRing2= true" :transform="trans4" style="cursor:pointer">
              <a href="#roadMap">
              <circle
                  class="dot2"
                  id="Ellipse 28"
                  cx="0"
                  cy="0"
                  r="18.5"
                  fill="#E4DACD"
                  stroke="black"
                  stroke-dasharray="6 6"
                />
                <circle class="dot" style="fill:black" id="Ellipse 24" cx="0" cy="0" r="9"/> 
                <text id="text1" font-size="1.5em" stroke="#272727" x="0" y="0" stroke-width="2px">{{`.           .Road Map`}}</text>
              </a>
            </g>
            <g id="circle_5" @mouseleave="hoverRing3= false" @mouseover="hoverRing3= true" :transform="trans5" style='cursor:pointer'>
              <a href="#contact">
              <circle
                  class="dot2"
                  id="Ellipse 28"
                  cx="0"
                  cy="0"
                  r="13.5"
                  fill="#E4DACD"
                  stroke="black"
                  stroke-dasharray="4 4"
                />
                <circle class="dot" style="fill:black" id="Ellipse 24" cx="0" cy="0" r="6"/> 
                <text id="text1" font-size="1.5em" stroke="#272727" x="0" y="0" stroke-width="2px">{{`.           .Contact`}}</text>
              </a>
            </g> 
          </g>
        </svg>
      </div>  
  </div>
    
    
  </div>
</template>

<script> 
import logoAnimate from '@/components/common/logo-animate.vue'
export default {
  components:{ logoAnimate },
  name: 'logo-medium',
  props:{ 
  },
  data(){
    return {
      project: [],
      trans1: 'translate(136.38475314139868,-35.77987018645747)',
      trans2: 'translate(136.38475314139868,-35.77987018645747)',
      trans3: 'translate(136.38475314139868,-35.77987018645747)',
      trans4: 'translate(136.38475314139868,-35.77987018645747)',
      trans5: 'translate(136.38475314139868,-35.77987018645747)',
      trans6: 'translate(136.38475314139868,-35.77987018645747)',
      rotationRing1: 'rotate(90)',
      rotationRing2: 'rotate(90)',
      rotationRing3: 'rotate(90)',
      initialTheta : 0, // The initial rotation angle, in degrees.
      currentTheta : 0,
      currentTheta2 : 0,
      currentTheta3 : 0,
      thetaDelta:0.2,// The amount to rotate the square about every 16.7 milliseconds, in degrees.
      angularLimit : 180,
      hoverRing1: false,
      hoverRing2: false,
      hoverRing3: false,
    }
  },
  methods:{
    showDetail(project){
      if(project && project.description){
        this.$emit('show-detail', project);
        this.project = project;
      }
    },
    animated(){
      this.$nextTick(()=>{
        setInterval(()=>{
            requestAnimationFrame(() => { this.doAnim(); });
        },10) 
      }); 
    },
    doAnim(){ 
        if (!this.hoverRing1){
          this.rotationRing1 = "rotate(" + this.currentTheta + ")";
          this.trans1 = "translate(" +Math.cos((this.currentTheta-15)*Math.PI/180)*554 + "," + Math.sin((this.currentTheta-15)*Math.PI/180)*554+")";
          this.trans2 = "translate(" +Math.cos((this.currentTheta+165)*Math.PI/180)*554 + "," + Math.sin((this.currentTheta+165)*Math.PI/180)*554+")";
          this.currentTheta += this.thetaDelta;
        }

        if (!this.hoverRing2){
          this.rotationRing2 = "rotate(" + this.currentTheta2 + ")";
          this.trans3 = "translate(" +Math.cos((this.currentTheta2-100)*Math.PI/180)*441 + "," + Math.sin((this.currentTheta2-100)*Math.PI/180)*441+")";
          this.trans4 = "translate(" +Math.cos((this.currentTheta2+85)*Math.PI/180)*441 + "," + Math.sin((this.currentTheta2+85)*Math.PI/180)*441+")";
          this.currentTheta2 -= this.thetaDelta;
        }

        if (!this.hoverRing3){
          this.rotationRing3 = "rotate(" + this.currentTheta3 + ")";
          this.trans5 = "translate(" +Math.cos((this.currentTheta3-100)*Math.PI/180)*351 + "," + Math.sin((this.currentTheta3-100)*Math.PI/180)*351+")";
          this.trans6 = "translate(" +Math.cos((this.currentTheta3+85)*Math.PI/180)*351 + "," + Math.sin((this.currentTheta3+85)*Math.PI/180)*351+")";
          this.currentTheta3 += this.thetaDelta;
        } 
    }
  },
  created(){
    this.animated();
  },
};
</script>

<style lang="scss">
#hero.logo{
  // position: inherit;
  // transform: inherit; 
  svg{
    z-index: 50;
  }

  #ring-3:hover{
      animation-play-state: paused !important;
  }


  #ring-2:hover{
      animation-play-state: paused !important;
  }


  #ring-1:hover{
      animation-play-state: paused !important;
  }

  .dot{
    fill:grey;
  }


  .logo { 
    top: 50%;
    left: 50%;
    width: 100%;
    // transform: translate(-50%, -50%);
    z-index: 2;
  }
}

#animate{

  height: 36.3%;
  width: 36.3%;
  position: absolute;
  left: 82%;
  margin-left: -50%;
  top: 82%;
  margin-top: -50%;
}
</style>