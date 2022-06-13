<template>
  <div>
    <Slideshow />
    <b-container>
      <div class="contact_lab">
        <div class="contact_pic">
          <img
            src="https://www.practo.com/tests/public/images/call_to_order.svg"
            alt=""
          />

          <div>
            <p>Need help with booking your test?</p>
            <p>Our experts are here to help you</p>
          </div>
        </div>
        <div class="contact_num">
          <div>
            <img
              src="https://www.practo.com/tests/public/icons/call-to-order.svg"
              alt=""
            />
          </div>
          <h4>+91 8045684087</h4>
        </div>
      </div>
    </b-container>


    


    
  </div>
</template>

<script>
import Slideshow from "./Slideshow";
export default {
  name: "LabTastComponent",
  components: { Slideshow },
};
</script>


<style scoped>
@import './LabTest.css'
</style>