<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container">
      <div class="row mt-5">
        <div class="col mt-4">
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
      <div class="row mt-4">
        <div class="col-md-12">
          <h3 class="text-center">PRODUK TERBARU</h3>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-wrapper"></div>
              </div>
              <div class="carousel-item">
                <div class="card-wrapper"></div>
              </div>
              <div class="carousel-item">
                <div class="card-wrapper"></div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
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

export default {
  name: "HomeView",
  components: {
    Navbar,
    // HelloWorld
  },
};
</script>
