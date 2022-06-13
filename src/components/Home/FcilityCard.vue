<template>
  <div class="facility">
   <div class="facility-card-box">
        <div class="facility-card-image-container" v-bind:style="{ 'background-color': background }">
            <img :src = "image" alt = "title" />
        </div>
        <div class="facility-card-info">
            <p>{{title}}</p>
            <p>{{sub}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacilityCard",
  props:["title", "sub", "background", "image"]
};
</script>

<style scoped>
@import "./FacilityCard.css"
</style>
