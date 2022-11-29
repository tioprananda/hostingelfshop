<template>
    <div class="panduanUkuran mb-5">
      <Navbar />
      <div class="container mt-5">
        <div class="row mt-5">
          <div class="col mt-5">
            <h6>Panduan Ukuran</h6><hr>
            <img src="../../assets/detailpage/ukuran.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  export default {
    name: `PanduanUkuran`,
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
  h6 {
    font-size: 15px;
    font-weight: 700;
  }
  </style>