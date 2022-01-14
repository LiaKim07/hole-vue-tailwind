<template>
  <div id="logo-road-map" class="flex justify-center items-center">
    <div class="svg-container w-full relative z-0">
      <svg
        width="100%"
        height="70%"
        viewBox="0 0 1440 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <ellipse
            style="
              fill: rgb(216, 216, 216);
              stroke: rgb(0, 0, 0);
              fill-opacity: 0;
              stroke-dasharray: 5px;
            "
            cx="702.578"
            cy="-36.029"
            rx="747.899"
            ry="323.168"
            transform="matrix(0.999971, 0.007635, 0, 1.000029, 0.020478, -5.363129)"
          />
          <g
            id="dot1" data-target="1"
            @click="(new Date() - $parent.mDate) > 700 ? targetHover(!$parent.mInfo, 1)  : ''" 
            @mouseleave="round1 = 33.5; targetHover(false, 1)"
            @mouseover="round1 = 40; targetHover(true, 1)"
          >
            <circle
              cx="733"
              cy="333.5"
              :r="round1"
              transform="rotate(-180 733 310.5)"
              fill="#DED4C3"
              stroke="#272727"
              stroke-width="3"
            />
            <circle
              cx="733"
              cy="333.5"
              r="14"
              transform="rotate(-180 733 310.5)"
              fill="#272727"
            />
          </g>
          <g
            id="dot2" data-target="2"
            @click="(new Date() - $parent.mDate) > 700 ? targetHover(!$parent.mInfo, 2)  : ''" 
            @mouseleave="round2 = 25.5; targetHover(false, 2)"
            @mouseover="round2 = 33; ; targetHover(true, 2)"
          >
            <circle
              cx="388"
              cy="282"
              :r="round2"
              transform="rotate(-180 388 269)"
              fill="#DED4C3"
              stroke="#272727"
              stroke-width="3"
            />
            <circle
              cx="388"
              cy="282"
              r="13"
              transform="rotate(-180 388 269)"
              fill="#272727"
            />
          </g>
          <g
            id="dot3" data-target="3"
            @click="(new Date() - $parent.mDate) > 700 ? targetHover(!$parent.mInfo, 3)  : ''" 
            @mouseleave="round3 = 25.5; targetHover(false, 3)"
            @mouseover="round3 = 33; targetHover(true, 3)"
          >
            <circle
              cx="1052.7"
              cy="282"
              :r="round3"
              transform="rotate(-180 1052.7 267.5)"
              fill="#DED4C3"
              stroke="#272727"
              stroke-width="3"
            />
            <circle
              cx="1052.7"
              cy="282"
              r="13"
              transform="rotate(-180 1052.7 267.5)"
              fill="#272727"
            />
          </g>
        </g>
      </svg>
      <div
        class="absolute right-0 top-0 left-0 flex justify-center items-start z-10"
      >
        <p class="text-5xl font-semi-bold uppercase lg:pt-24 pt-2">RoadMap</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noLoop: false,
      round1: 33.5,
      round2: 25.5,
      round3: 25.5,
    };
  },
  methods: {
    targetHover(e, v){
      var el = this.$parent.$refs.targetHover[v-1].$el;
      if(e){
        if(!this.noLoop){
          this.noLoop = true;
          this.$parent.mDate = new Date()
          this.$emit('data', v);
          this.$parent.mInfo = true
          this.$parent.mActive = v
          setTimeout(function(){
            el.style.display = 'block'
            el.style.maxHeight = el.scrollHeight+'px'
          }, 10);
        }
      }else{
        this.noLoop = false
        this.$parent.mDate = false
        this.$parent.mInfo = false
        this.$parent.mActive = null
        el.style.maxHeight = '0px'
      }
    }
  },
  created() {},
};
</script>

<style lang="scss">
#logo-road-map {
  // cursor: pointer;
}

#dot1:hover,
#dot2:hover,
#dot3:hover {
  cursor: pointer;
  //
}
</style>
