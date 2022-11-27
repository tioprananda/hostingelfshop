<template>
  <footer>
    <div class="container-fluid kosong">
    </div>
    <div class="container mt-5 mb-5">
      <div class="row conInformation">
        <div class="col-md-3 mb-3">
          <h6><strong>TOKO</strong></h6>
          <br />
          <div class="row">
            <div class="col-md-1"><b-icon-geo-alt /></div>
            <div class="col">
              <span>Pekanbaru City, Riau, Indonesia</span> <br />
              <router-link to="/hubungi">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm buttonPeta"
                >
                  Lihat Peta
                </button>
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1"><b-icon-telephone /></div>
            <div class="col"><span>0887-4250-5356</span></div>
          </div>
          <div class="row">
            <div class="col-md-1"><b-icon-envelope /></div>
            <div class="col"><span>prananda.tio @gmail.com</span></div>
          </div>
        </div>

        <div class="col-md-3 mb-3">
          <H6><strong>INFORMASI</strong></H6>
          <br />
          <div class="row">
            <div class="col">
              <router-link to="/carabeli" class="nav-link"
                ><span>Cara Pembelian</span></router-link
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <router-link to="/panduan" class="nav-link"
                ><span>Panduan Ukuran</span></router-link
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <router-link to="/retur" class="nav-link"
                ><span>Syarat & Retur</span></router-link
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <router-link to="/faq" class="nav-link"
                ><span>FAQ</span></router-link
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <router-link to="/newsletter" class="nav-link"
                ><span>Newsletter</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <H6><strong>TENTANG KAMI</strong></H6>
          <br />
          <div class="row">
            <div class="col">
              <router-link to="/about" class="nav-link"
                ><span>Hubungi Kami</span></router-link
              >
            </div>
          </div>

          <div class="row">
            <div class="col">
              <router-link to="/testimonial" class="nav-link"
                ><span>Testimonial</span></router-link
              >
            </div>
          </div>

          <div class="row">
            <div class="col">
              <router-link to="/artikel" class="nav-link"
                ><span>Artikel & Info</span></router-link
              >
            </div>
          </div>

          <div class="row">
            <div class="col">
              <router-link to="/karir" class="nav-link"
                ><span>Karir</span></router-link
              >
            </div>
          </div>

          <div class="row">
            <div class="col">
              <router-link to="/reseller" class="nav-link"
                ><span>Reseller</span></router-link
              >
            </div>
          </div>

          <div class="row">
            <div class="col">
              <router-link to="/sewa" class="nav-link"
                ><span>Sewa Studio Foto</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <H6><strong>IKUTI KAMI</strong></H6>
          <br />
          <div class="row">
            <div class="col">
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/facebook.png" alt="" />
              </router-link>
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/line.png" alt="" />
              </router-link>
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/IG.png" alt="" />
              </router-link>
            </div>
          </div>
          <H6 class="mt-3"><strong>VERIFIKASI ELFS SHOP</strong></H6>
          <br />
          <div class="row">
            <div class="col">
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/polisionline.png" alt="" />
              </router-link>
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/trusted.png" alt="" />
              </router-link>
              <router-link to="/" target="_blank" class="linkSosmed">
                <img src="../assets/aman.png" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pembayaran">
      <div class="row text-center paddingPembayaran">
        <div class="col-md-4">
          <h6 class="mb-4"><strong>METODE PEMBAYARAN</strong></h6>
          <img src="../assets/bank_logo_mandiri-052df-3073_118-t3073_109.png" alt="">
          <img src="../assets/bank_logo_bca-e0d64-3073_115-t3073_109.png" alt="">
          <img src="../assets/logo_bank_bri-f4962-3073_173-t3073_109.png" alt="">
        </div>
        <div class="col-md-4">
          <H6 class="mb-4"><STRONG>JASA PENGIRIMAN</STRONG></H6>
          <img src="../assets/paket_gojek_kecil-a55a1-3073_119-t3073_109.png" alt="">
          <img src="../assets/paket_grab_kecil-453f9-3073_174-t3073_109.png" alt="">
          <img src="../assets/paket_jne-e524b-3073_120-t3073_109.png" alt="">
        </div>
        <div class="col-md-4">
          <H6 class="mb-4"><STRONG>KAMI TERSEDIA DI</STRONG></H6>
          <router-link to="/" target="_blank" class="linkSosmed">
            <img src="../assets/9559_a86e084c0311c6f064df7c23bc21c4dc495e0068_bukalapak_m-3ac32-3073_163-t598_14.png" alt="">
          </router-link>
          <router-link to="/" target="_blank" class="linkSosmed">
            <img src="../assets/laz-6bea2-3073_164-t598_14.png" alt="">
          </router-link>
          <router-link to="/" target="_blank" class="linkSosmed">
            <img src="../assets/icon-f421a-3073_168-t598_14.png" alt="">
          </router-link>
          <router-link to="/" target="_blank" class="linkSosmed">
            <img src="../assets/tokopedia_logo_7a2ed467a5_seeklogo_com-e8a69-3073_169-t598_14.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col mt-2">
          <h5><strong>TOKO BAJU PRIA</strong></h5>
          <br />
          <p>
            ELFS SHOP adalah <span>TOKO BAJU PRIA</span>, aksesoris & sport
            pria. Selain jualan online, kami memiliki toko di greenlake city,
            cipondoh, tangerang, berbatasan dengan duri kosambi Jakarta barat.
            Produk ELFS SHOP meliputi kemeja, poloshirt, kaos, sweater, jaket &
            hoody, baju koko, celana, pakaian dalam, tas, topi, kupluk, syal,
            dasi, ikat pinggang, kaos kaki, perlengkapan outdoor & olahraga,
            aksesoris motor, dan pakaian anak kecil. ELFS SHOP adalah online
            shop yang lengkap untuk keperluan cowok gaul dengan gaya ootd masa
            kini. Produk ELFS SHOP merupakan produksi di dalam dan luar negeri.
            Produk ELFS SHOP mengutamakan harga yang murah, namun kualitas
            produk bagus.
          </p>
          <br /><br />
          <P
            >Elfs Shop telah online sejak tahun 2007, menjual produk yang di
            produksi di luar dan dalam negeri. Memberikan barang berkualitas
            dengan harga terjangkau dan memberikan pelayanan cepat, ramah dan
            terpercaya. Elfs shop tetap peduli kepada lingkungan dengan
            menggunakan kertas daur ulang, dan ikut berdonasi kepada wwf dan
            yayasan tali kasih setiap bulannya. Elfs Shop Man Fashion melayani
            import langsung dari Cina untuk produk apa saja dengan pembelian
            kuantiti minimal 50-100pcs ke atas, campur berbagai model dari
            1jenis barang. Contoh : 10model ikat pinggang x 5pcs.</P
          >
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row bg-dark">
        <div class="col mt-2 p-2">
          <h6 class="text-center footerh4">
            <b-icon-cast /> Copyright 2022 Tyo All Right Reserved | Mobile
            Version
          </h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: `FooterNav`,
};
</script>

<style scoped>

.kosong {
  background-color: rgba(17, 175, 175, 0.678);
  padding: 5px;
}

.paddingPembayaran {
  padding: 70px;
}
.pembayaran {
  background-color: rgb(238, 232, 232);
}


.conInformation {
  padding: 50px;
}
.linkSosmed {
  padding-right: 5px;
}

.nav-link {
  color: rgb(65, 62, 62);
  list-style: none;
  text-decoration: none;
  padding: 0px;
}
p span {
  font-weight: bold;
  font-style: italic;
}
p {
  color: rgb(65, 62, 62);
  font-size: 15px;
  display: inline;
  text-align: justify;
}

.buttonPeta {
  background-color: rgb(170, 170, 170);
  border: transparent;
  margin: 5px auto;
}
</style>