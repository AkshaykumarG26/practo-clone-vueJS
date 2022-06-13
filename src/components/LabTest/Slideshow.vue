<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-height="480"
        v-bind:style="{'width': '90%', 'margin': 'auto'}"
      >
        <b-carousel-slide
        v-bind:style="{'background-color': '#e7f1f8',}"
          img-src="https://clone-practo.vercel.app/static/media/praco1.7d93c44b1b42ad037367.png"
          
        ></b-carousel-slide>
        <b-carousel-slide
        v-bind:style="{'background-color': '#f7e8e6'}"
          img-src="https://clone-practo.vercel.app/static/media/praco3.7729f501956ae2591289.png"
        ></b-carousel-slide>
        <b-carousel-slide
        v-bind:style="{'background-color': '#e7f1f8'}"
          img-src="https://clone-practo.vercel.app/static/media/praco2.4ffff7b39f235402c157.png"
        ></b-carousel-slide>
        
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicinesSlideshow",
};
</script>

<style scoped>

</style>
