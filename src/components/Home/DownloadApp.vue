<template>
  <div>
    <section class="home-practo-app">
      <div class="home-practo-app-background"></div>
      <div class="home-practo-app-content">
        <div class="home-practo-app-image-container">
          <img
            src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
            alt="practo-app"
          />
        </div>
        <div class="home-practo-app-info-container">
          <h2>Download the Practo app</h2>
          <p>
            Access video consultation with India’s top doctors on the Practo
            app. Connect with doctors online, available 24/7, from the comfort
            of your home.
          </p>
          <p>Get the link to download the app</p>
          <div class="home-practo-app-input">
            <b-input-group class="home-practo-app-inputGroup" size="lg">
              <input
                placeholder="Enter phone number"
                style="
                   {
                    fontsize: '14px';
                    border: 'none';
                  }
                "
              />
            </b-input-group>
            <button class="button button-primary">Send SMS</button>
          </div>
          <div class="home-store-buttons-container">
            <button class="button button-store">
              <img
                src="../../assets/images/home-google-play.svg"
                alt="google-play"
              />Google Play
            </button>
            <button class="button button-store">
              <img
                src="../../assets/images/home-apple-logo.svg"
                alt="google-play"
              />Apple Store
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "DownloadComponent",
};
</script>

<style scoped>

@import "./Download.css"
</style>
