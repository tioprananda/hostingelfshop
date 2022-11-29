<template>
  <div class="caraBeli mb-5">
    <Navbar />
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col mt-5">
          <img src="../../assets/detailpage/carabeli.jpg" alt="" />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-3">
          <h6>CARA PEMBELIAN</h6>
          <label for="carabeli">Cara Pembelian</label>
        </div>
        <div class="col">
          <h6>CARA PEMBELIAN</h6>
          <hr />
          <br />
          <p>
            <strong>Cara Pembelian Waktu pengiriman :</strong>  <br />
            konfirmasi pembayaran invoice sebelum jam 13.00, dikirim pada hari
            kerja yang sama <br /><br />
            <strong>Lama Pengiriman :</strong> <br />
            GOJEK / GRAB same day / instant <br />
            JNE YES 1 hari (hari minggu/libur tetap diantar JNE) <br />
            JNE REGULAR 2- 4hari kerja <br />
            JNE OKE 5-7 hari kerja <br /><br />
            <strong>Cara Pembelian :</strong>
            <ul>
            <li>Pertama pilih item yang ada inginkan atau beli.</li>
            <li>
              Pastikan item dan jumlah item sesuai dengan keinginan anda sebelum
              menekan tombol "BELI".
            </li>
            <li>
              setelah menekan tombol "BELI" akan muncul window halaman catatan
              belanja anda. Anda bisa mengubah jumlah produk yang diinginkan
              pada keranjang belanja. Jika anda sudah merubahnya namun jumlah
              produk tersebut tetap 0 di keranjang belanja anda, maka artinya
              stok ukuran atau warna produk tersebut habis. Silakan coba ukuran
              atau warna produk lainnya. Jika sudah sesuai, anda bisa klik
              "BAYAR" untuk melakukan tahapan selanjutnya.
            </li>
            <li>
              pada tahap selanjutnya anda dapat langsung "MASUK" atau anda akan
              di minta mengisi form tujuan pengiriman beserta nama penerima atau
              ordernya.
            </li>
            <li>
              isi form sesuai dengan data anda sebenarnya, untuk alamat lengkap,
              kabupaten dan kecamatan akan menyesuaikan tarif JNE REGULAR atau
              YES per Kilogram.
            </li>
            <li>
              GOJEK hanya Khusus Jakarta dan Tangerang. tarif nya akan tercantum
              0. kami akan menghubungi anda jika produk sudah siap dan anda
              dapat memesan & membayar sendiri untuk gojeknya
            </li>
            <li>Jika sudah dilakukan pengisian data, klik"LANJUTKAN".</li>
            <li>
              tahapan selanjutnya adalah pengecekan data, pastikan kembali
              alamat dan nomor telepon tidak salah untuk kepentingan pengiriman
              item ke tempat anda, dan pastikan kembali item yang berada dalam
              keranjang belanja anda sudah benar. anda bisa memilih beberapa
              metode pengiriman pilihan dari JNE Regular, JNE OKE, JNE YES. klik
              "LANJUTKAN"
            </li>
            <li>
              lakukan pembayaran dengan transfer ke salah satu dari 4 bank atau
              scan GOPAY
            </li>
            <li>
              konfirmasi pembayaran dengan cara : <br />
              <p>- klik konfirmasi pembayaran di halaman ini. Nomor invoice dapat
              disalin dari email anda, cek email di inbox atau di spam anda ATAU
              lebih mudah : <br />
              - ke riwayat pembelian di profil anda, klik konfirmasi pembayaran</p>
            </li>
          </ul>
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: `carabeli`,
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
label {
  margin-top: 15px;
  padding: 5px 50px;
  font-weight: bolder;
  font-weight: 500;
  border: 2px solid transparent;
  background-color: rgb(197, 197, 197);
}
</style>