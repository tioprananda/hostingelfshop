<template>
  <div class="newsletter mb-5">
    <Navbar />
    <div class="container mt-2">
      <div class="row mt-2">
        <div class="col-md-12 mt-2">
          <h2><strong>Newsletter</strong></h2>
          <hr />
        </div>
        <div class="col">
          <p>
            Dapatkan informasi mengenai promosi & harga dengan cara berlangganan
            newsletter kami.
          </p>
          
          <!-- Using components -->
          <b-input-group size="sm" class="mt-2">
            <b-form-input placeholder="Input Email Anda Disini..."></b-form-input>
            <b-input-group-append>
              <b-button variant="info">Subscribe!</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: `NewsLetter`,
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