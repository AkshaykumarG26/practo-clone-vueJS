<template>
  <div>
    <div>
      <h2>Acne</h2>
      <div class="medicine" v-for="product in acnedata" v-bind:key="product.id">
        <div class="mainMedicine">
          <!-- <Link class="know_more" to={`/acne/${e.id}`}>
                    </Link> -->
                        <img class="M_img" :src=product.image alt="text" />
          <hr />
          <p class="m_Name">{{ product.title }}</p>
          <p class="m_price">
            ₹{{ product.price }}&nbsp;&nbsp;<span class="m_price1"
              >₹{{ product.price1 }}</span
            >&nbsp;&nbsp;<span class="m_discount">{{ product.discount }}</span>
          </p>
          <div class="m_unitbtn">
            <p>{{ product.unitcount }}</p>
            <button class="addtocart">ADD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcneComonent",
  methods: {
    async getData() {
      const response = await fetch(
        "https://practo-suraj-server.herokuapp.com/acne",
      );
      const data = await response.json();
      console.log(data);
      this.acnedata = data;
    },
  },
  data() {
    return {
      acnedata: null,
    };
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
@import "./Acne.css";
</style>
