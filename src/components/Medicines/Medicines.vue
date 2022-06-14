<template>
  <div>
    <div>
      <div>
        <Slideshow />
      </div>
      
        <div class="health_div">
          <h4>Browse medicines & health products</h4>
          <!-- <br /> -->
          <p>Health conditions</p>

          <div class="health_img">
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png"
                  alt=""
                />
              </div>
            </button>
          </div>
          <!-- <br /> -->
          <p>Categories</p>
          <div class="health_img">
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-1.f17a3332.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png"
                  alt=""
                />
              </div>
            </button>
            <button>
              <div class="h_img">
                
                <img
                  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
        <!-- <br /> -->
        <!-- <br /> -->
      
      <hr />
      <b-container class="introducing_stuff">
        
          <div>
            <p>
              Don’t self medicate. Talk to an expert. Consult a doctor in less
              than 2 minutes.
            </p>
            <img
              src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-1.d328c6a9.png"
              alt=""
            />
          </div>
        
        
          <div>
            <p>
              Tired of waiting in a queue? Too weak to go down and buy
              medicines?
            </p>
            <img
              src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-2.5a0b85e1.png"
              alt=""
            />
          </div>
        
      </b-container>
      <!-- <br /> -->
      <!-- <br /> -->
      <div class="know-your-medicine">
        <img
          src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png"
          alt="xyz"
          v-bind:style="{
            width: '100%',
            
            'background-color': '#e7f1f8',
          }"
        />
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Slideshow from "./Slideshow";
export default {
  name: "MedicinesComponent",
  components: {
    Slideshow,
  },
};
</script>

<style scoped>
@import "./Medicines.css";
</style>
