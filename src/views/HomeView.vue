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
        <div class="col-md-12">
          <h3 class="text-center produkbaru">PRODUK TERBARU</h3>
        </div>

        <!-- CAROUSEL -->

        <div class="row">
          <div class="container">
            <carousel>
              <!-- PUUUUSIIIIIIIIIIIIIIIIIIIIIIINGGGGGGG -->
            </carousel>
          </div>
        </div>

        <div class="col-md-12">
          <h3 class="text-center">PRODUK TERLARIS</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import carousel from "vue-owl-carousel";
import axios from "axios";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    carousel,
    CardProduct,
    // HelloWorld
  },

  data: function () {
    return {
      product: [],
    };
  },

  methods: {
    setProduct: function (data) {
      this.product = data;
      console.log(this.product);
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style scoped>

</style>
