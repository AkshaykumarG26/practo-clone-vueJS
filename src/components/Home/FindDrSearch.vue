<template>
  <div class="mainDiv">
    <div class="home-search-container">
      <div class="location-search-box">
        <img
          src="../../assets/images/home_location_icon.svg"
          alt=""
          width="22"
        />
        <input
          type="text"
          class="search-location-input-box"
          placeholder="Search location"
        />
        <!-- onFocus={() => setLocationResultHidden(false)} onBlur={() => setLocationResultHidden(true)} onChange={(e) => setSearchLocation(e.target.value)}  -->
        <div
          class="search-location-input-results"
          hidden="{locationResultHidden}"
        >
          <div
            v-for="(location, i) in locations.city"
            v-bind:key="i"
            class="search-location-result-item"
            @click="location"
          >
            <span
              ><img
                src="../../assets/images/search.svg"
                alt="search"
                width="12"
            /></span>
            <span
              ><div>{{ location }}</div>
              <div>{{ location }}</div></span
            >
          </div>
          )
        </div>
      </div>
      <div class="doctor-search-box">
        <img src="../../assets/images/search.svg" alt="" width="22" />
        <input
          type="text"
          class="search-doctor-input-box"
          placeholder="Search doctors, clinics, hospitals, etc."
        />
        <!-- onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} -->
        <div class="search-doctor-input-results" hidden="{doctorResultHidden}">
          <div
            v-for="(speciality, i) in specialities[i]"
            v-bind:key="i"
            class="search-doctor-result-item"
          >
            <!-- onMouseDown={() => handleDoctorSelect(speciality)} -->
            <!-- <span><img src="../../assets/images/search.svg" alt="search svg" /></span> -->
            <span>{{ speciality }}</span>
            <!-- <span>SPECIALITY</span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="home-try-plus-img-container">
      <img
        src="https://www.practostatic.com/subscriptions/images/plus-tag.png"
        alt="try plus"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FindDrSearch",
  data() {
    return {
      locations: [
        {
          place: "Raipur",
          city: "Raipur",
        },
        {
          place: "Delhi",
          city: "Delhi",
        },
        {
          place: "Indore",
          city: "Indore",
        },
        {
          place: "Sapna Sangeeta",
          city: "Indore",
        },
        {
          place: "Ab Road",
          city: "Indore",
        },
        {
          place: "Lig Colony",
          city: "Indore",
        },
        {
          place: "Sudama Nagar",
          city: "Indore",
        },
      ],
      specialities: [
        "Dentist",
        "Gynecologist/obstetrician",
        "General Physician",
        "Dermatologist",
        "Ear-nose-throat (ent) Specialist",
        "Homeopath",
        "Ayurveda",
      ],
      location: null,
      speciality: null,
    };
  },
};
</script>

<style scoped>
@import "./FindDrSearch.css";
</style>
