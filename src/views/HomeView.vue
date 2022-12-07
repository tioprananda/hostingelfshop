<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <div class="col mt-3">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/banner.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <router-link to="/product">
            <img
              src="../assets/banner-kecil-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="col-md-6">
          <router-link to="/product">
            <img
              src="../assets/banner-kecil-2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12 colCarousel">
          <h3 class="text-center produkbaru">PRODUK TERBARU</h3>
          <!-- CAROUSEL -->
          <carousel autoplay :perPageCustom="[[456, 1],[768, 3], [1024, 4]]">
              <slide class="slideCard" v-for="item in product" :key="item.id" > 
                <CardProduct :productprop="item"></CardProduct>
              </slide>  
          </carousel>
        </div>
      </div>

      <div class="row mt-5 mb-5" >
        <div class="col-md-12 colCarousel">
          <h3 class="text-center produkbaru">PRODUK TERLARIS</h3>
          <!-- CAROUSEL -->
          <carousel autoplay :perPageCustom="[[456, 1], [768,2], [1024, 3]]">
              <slide class="slideCard" v-for="item in dataBestProduct" :key="item.id"  > 
                <CardProduct :productprop="item"></CardProduct>
              </slide>  
          </carousel>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
// import carousel from "vue-owl-carousel";
import axios from "axios";
import CardProduct from "@/components/CardProduct.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "HomeView",
  components: {
    Navbar,
    // carousel,
    CardProduct,
    Carousel,
    Slide,
    // HelloWorld
  },

  data: function () {
    return {
    
    };
  },

  methods: {
  
  },

  computed : {
    product : function () {
      return this.$store.state.product;
    },
    dataBestProduct : function () {
      return this.$store.state.dataBestProduct;
    }
  },

  mounted() {
   
      this.$store.dispatch('setProduct');
      this.$store.dispatch(`bestProduct`);
  },
  
  
};
</script>

<style scoped>

</style>
