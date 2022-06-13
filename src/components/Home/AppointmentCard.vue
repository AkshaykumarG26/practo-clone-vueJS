<template>
    <div class="mainContainer">
        <div class="appoinment-card">
        <div class="appoinment-card-image-container">
            <img :src="image" alt="title" />
        </div>
        <div class="appoinment-card-info">
            <div class="appoinment-card-title">{{title}}</div>
            <div class="appoinment-card-sub">{{sub}}</div>
        </div>
    </div>
    </div>
</template>



<script>
export default{
    name: "AppointmentCard",
    props:['title', 'image', 'sub']
}
</script>


<style scoped>
@import './AppointmentCard.css';
</style>