<template>
  <div class="main">
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
export default {
  name: 'App',
  components: {
    
    Navbar,
    Footer
}
}
</script>


<style scoped>
.main{
  transform: scale(1);
}
</style>

