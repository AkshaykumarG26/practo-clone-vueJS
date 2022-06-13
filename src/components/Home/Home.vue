<template>
  <div class="homepage-container">
    <!-- <Navbar /> -->
    <hr class="horizontal-line" />
    <div class="home-search-area">
      <FindDrSearch />
    </div>
    <section class="home-banner">
      <div class="home-banner-left">
        <div class="home-banner-practo-care">
          <img
            src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png"
            alt="practo_care"
          />
        </div>
        <p>Choose the experts in end to end surgical care.</p>
        <p>You are in safe hands</p>
        <Button class="btn-knowmore">Know more</Button>
      </div>
      <div class="home-banner-right">
        <img
          src="https://www.practostatic.com/consumer-home/practo-care/1631634827/dweb_hero_banner.png"
          alt="banner"
        />
      </div>
    </section>
    <section class="home-facilities">
      <FcilityCard
        title="Instant Video Consultation"
        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
        sub="Connect within 60 secs"
        background="#AFCFED"
      />
      <FcilityCard
        title="Find Doctors Near You"
        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
        sub="Confirmed appoinments"
        background="#98CBD6"
      />
      <FcilityCard
        title="Medicines"
        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png"
        sub="Essentials at your doorstep"
        background="#ccd0db"
      />
      <FcilityCard
        title="Lab test"
        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
        sub="Sample pickup at your home"
        background="#afcfed"
      />
      <FcilityCard
        title="Surgeries"
        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
        sub="afe and trusted surgery centers"
        background="#d5d8fc"
      />
    </section>
    <section class="home-consult">
      <h2>Consult top doctors online for any health concern</h2>
      <p>
        Private online consultations with verified doctors in all spedialties
      </p>
      <div class="home-consult-card-container">
        <ConsultCard
          title="Period doubts or Pregnancy"
          image="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
        />
        <ConsultCard
          title="Acne, pimple or skin issues"
          image="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
        />
        <ConsultCard
          title="Performance issues in bed"
          image="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
        />
        <ConsultCard
          title="Cold, cough or fever"
          image="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
        />
        <ConsultCard
          title="Child not feeling well"
          image="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
        />
        <ConsultCard
          title="Depression or anxiety"
          image="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
        />
      </div>
    </section>
    <section class="home-appoinments">
      <h2>Book an appointment for an in-clinic consultation</h2>
      <h3>Find experienced doctors across all specialties</h3>
      <div class="appoinments-slider-container">
        <AppointmentCard
          image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"
          title="Dentist"
          sub="Teething troubles? Schedule a dental checkup"
        />
        <AppointmentCard
          image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"
          title="Gynecologist/Obstetrician"
          sub="Explore for women's health, pregnancy and infertility treatments"
        />
        <AppointmentCard
          image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg"
          title="Dietitian/Nutrition"
          sub="Get guidance on eating right, weight management and sports nutrition"
        />
        <AppointmentCard
          image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"
          title="Physiotherapist"
          sub="Pulled a muscle? Get it treated by a trained physiotherapist"
        />
        <AppointmentCard
          image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg"
          title="General surgeon"
          sub="Need to get operated? Find the right surgeon"
        />
      </div>
    </section>
    <section class="home-top-articles">
      <div class="home-top-articles-info">
        <h2>Read top articles from health experts</h2>
        <p>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </p>
        <button class="button button-primary">See all articles</button>
      </div>
      <ArticleCard
        image="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
        category="coronavirus"
        title="12 Coronavirus Myths and Facts That You Should Be Aware Of"
        sub="Dr. Diana Borgio"
      />
      <ArticleCard
        image="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
        category="Vitamins and supplements"
        title="Eating Right to Build Immunity Against Cold and Viral Infections"
        sub="Dr. Diana Borgio"
      />
    </section>
    <section className="home-user-reviews"></section>
    <DownloadApp />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import FindDrSearch from "./FindDrSearch";
import FcilityCard from "./FcilityCard";
import ConsultCard from "./ConsultCard";
import AppointmentCard from "./AppointmentCard";
import ArticleCard from "./ArticleCard";
import DownloadApp from "./DownloadApp";

export default {
  name: "HomePage",
  components: {
    // Navbar,
    // Footer,
    FindDrSearch,
    FcilityCard,
    ConsultCard,
    AppointmentCard,
    ArticleCard,
    DownloadApp,
  },
  facilityCardProps: {
    title: String,
    sub: String,
    background: String,
    image: String,
  },
  consultCardProps: {
    image: String,
    title: String,
  },
  appointmentCardProps: {
    image: String,
    title: String,
    sub: String,
  },
};
</script>

<style scoped>
@import "./Home.css";
</style>
