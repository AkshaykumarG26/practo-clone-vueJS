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
    <b-container>
      <div class="top_tests">
        <h4>Top Booked Diagnostic Tests</h4>
        <br />

        <div class="test_flex">
          <div class="test_div">
            <h6>Covid Antibody IGG</h6>
            <p>Known as Covid Clia blood serum</p>
            <p>E-Reports in 2 days</p>
            <h5>₹ 1500</h5>

            <div></div>
            <p>ADD</p>
          </div>
          <div class="test_div">
            <h6>Fasting Blood Sugar</h6>
            <p>Known as Glucose fasting blood</p>
            <p>E-Reports on next day</p>
            <h5>₹ 150</h5>
            <div></div>
            <p>ADD</p>
          </div>
          <div class="test_div">
            <h6>Beta HCG</h6>
            <p>Known as Beta Hcg Automated Blood</p>
            <p>E-Reports on next day</p>
            <h5>₹ 315</h5>
            <div></div>
            <p>ADD</p>
          </div>
          <div class="test_div">
            <h6>Vitamin B12</h6>
            <p>Known as Vitamin B12 Conventional Blood</p>
            <p>E-Reports on next day</p>
            <h5>₹ 490</h5>
            <div></div>
            <p>ADD</p>
          </div>
          <div class="test_div">
            <h6>HbA1c</h6>
            <p>Known as Glycosylated Haemoglobin Blood</p>
            <p>E-Reports on next day</p>
            <h5>₹ 550</h5>
            <div></div>
            <p>ADD</p>
          </div>
          <div class="test_div">
            <h6>Liver Function Test</h6>
            <p>Known as Liver Function Tests Blood</p>
            <p>E-Reports on next day</p>
            <h5>₹ 400</h5>
            <div></div>
            <p>ADD</p>
          </div>
        </div>
      </div>
    </b-container>
    <Container>
      <div class="health_div">
        <h4>Find Tests by Health Concern</h4>
        <br />
        <div class="health_img">
          <div class="h_img">
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559" alt="" />
            <p>Fever</p>
          </div>
          <div class="h_img">
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559" alt="" />
            <p>Diabaties</p>
          </div>
          <div class="h_img">
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559" alt="" />
            <p>Skin</p>
          </div>
          <div class="h_img">
            <img src='https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559' alt="" />
            <p>Kidney</p>
          </div>
          <div class="h_img">
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Stomach.svg?v=1569493559" alt="" />
            <p>Digestion</p>
          </div>
          <div class="h_img">
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559" alt="" />
            <p>Cancer</p>
          </div>
        </div>
      </div>
    </Container>
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
@import "./LabTest.css";
</style>
