<template>
  <div class="bayar">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <div class="feedback mt-4 mb-5">
            <h3>Terimakasih telah berbelanja di www.elfs-shop.com</h3><br>
            <p>
              Pesanan di keranjang belanja anda telah kami terima. <br> 
              detail pesanan bisa dilihat di email anda / riwayat pembelian.<br><br>
              WAKTU PENGIRIMAN : <br>
              komfirmasi pembayaran jam 13.00 WIB - hari kerja yang sama <br><br>
              PROSES SELANJUTNYA : <br>
              Transfer / Gopay lalu klik tombol konfirmasi pembayaran di bawah <br>
              - Transfer Bank ke : <br><br>
              <strong>NAMA : TIO PRANANDA</strong><br>
              <strong>BSI SYARIAH : 7194488542</strong>
            </p><br>
            <img src="../assets/barcodeelfs.png" alt="">
          </div>

          <b-button
                    class="mt-5 mb-5 btnHomePage"
                    centered
                    type="submit"
                    variant="info"
                    @click="homePage"
                    block> Kembali ke Halaman Home Pages
                  </b-button>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: `bayar`,
  components: {
    Navbar,
  },
  methods : {
    homePage(){
      this.$router.push({ path : '/' })
    },
  },
};
</script>

<style scoped>
h3 {
  color: rgb(15, 105, 105);
}

p{
  font-size: 15px;
}

.btnHomePage {
  margin: auto;
  width: 400px;
}

</style>
