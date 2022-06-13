<template>
  <div>
    <div class="header">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#"
          ><router-link to="/"
            ><img
              class="practo_logo"
              src="../../assets/images/practo_logo.png"
              alt="practo_logo" /></router-link
        ></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Find a Doctor</b-nav-item>
            <b-nav-item href="#">Video Consult</b-nav-item>
            <b-nav-item
              ><router-link
                v-bind:style="{ color: 'black', 'text-decoration': 'none' }"
                to="/medicines"
                >Medicines</router-link
              ></b-nav-item
            >
            <b-nav-item ><router-link
                v-bind:style="{ color: 'black', 'text-decoration': 'none' }"
                to="/labtest"
                >Lab Test</router-link
              ></b-nav-item>
            <b-nav-item href="#">Surgeries</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="For Providers" right>
              <b-dropdown-item href="#">Practo Prime</b-dropdown-item>
              <b-dropdown-item href="#">Software For Provider</b-dropdown-item>
              <b-dropdown-item href="#"
                >List your practice for Free</b-dropdown-item
              >
              <b-dropdown-item href="#">Corporate Wellness</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Data & Security" right>
              <b-dropdown-item href="#">Data Security</b-dropdown-item>
              <b-dropdown-item href="#">Help</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">SignIn / SignUp</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.practo_logo {
  width: 150px;
  display: flex;
  margin-right: 0;
  /* border: 1px solid black; */
}
.header {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
