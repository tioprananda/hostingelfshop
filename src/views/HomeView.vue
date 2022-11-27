<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
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
          <router-link to="/products">
            <img
              src="../assets/banner-kecil-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="col-md-6">
          <router-link to="/products">
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
      product: [],
      dataBestProduct: [],
    };
  },

  methods: {
    setProduct: function (data) {     
      this.product = data;
    },
    bestProduct : function (data) {
      this.dataBestProduct = data;
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.bestProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
  
  
};
</script>

<style scoped>

</style>
