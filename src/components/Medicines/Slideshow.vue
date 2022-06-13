<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
        v-bind:style="{'background-color': '#e7f1f8'}"
          img-src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png"
        ></b-carousel-slide>
        <b-carousel-slide
        v-bind:style="{'background-color': '#f7e8e6'}"
          img-src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png"
        ></b-carousel-slide>
        <b-carousel-slide
        v-bind:style="{'background-color': '#e7f1f8'}"
          img-src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png"
        ></b-carousel-slide>
        <b-carousel-slide
        v-bind:style="{'background-color': '#eeebf8'}"
          img-src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png"
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
