<template>
  <div>
    <div class="consult-card">
      <div class="consult-card-img-container">
        <img :src="image" alt="title" />
      </div>
      <div class="title-consult">
        <div class="consult-card-title">{{ title }}</div>
        <div class="consult-card-consultnow">CONSULT NOW</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultCard",
  props: ["title", "image"],
};
</script>

<style scoped>
@import "./ConsultCard.css";
</style>
