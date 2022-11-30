<template>
  <div class="detailProduct">
    <Navbar/>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-4 mt-5">
              <div class="card border-0 shadow mx-2">
                <img
        :src="'../assets/pakaian/'+product.gambar"
        class="card-img-top"
        alt="..."
      />
              </div>
                 
            </div>
            <div class="col-md-5 mt-5">
                <h1>{{product.nama}}</h1>
                <h3>Rp. {{product.harga}}</h3>
                  <div class="menu-detail mt-3">
                    <button type="button" class="btnEdit" :class="{active:active(`detail`)}" @click = "buttonActive(`detail`)">Detail Ukuran</button>
                    <button type="button" class="btnEdit" :class="{active:active(`rincian`)}" @click = "buttonActive(`rincian`)">Rincian</button>
                    <hr></div>
                    <div v-if="this.menu === `detail`">
                  <div class="isiDetail">
                    <p>
                      Bahan: ice silk / Lycra <br><br>
                      Karakteristik bahan:
                      <ul>
                        <li> Anti UV UPF > 40</li>
                        <li>Breathable & Quickdry (nayaman dipakai)</li>
                        <li>menjaga suhu tubu (sensasi dingin)</li>
                        <li>Elastic & Light Weight</li>
                      </ul>
                      Fitur lainnya: 
                      <ul>
                        <li>Scotchlite reflektive tape pada sablon logo</li>
                        <li>Anti slip di lengan atas mencegah manset turun / kendor</li>
                        <li>Awet & tahan lama (jahitan kuat dengan 4 jarum dan 6 benang)</li>
                      </ul>
                      Ukuran :
                      <ul>
                        <li>S: Panjang 39.5cm, lebar lengan bawah 7cm, lebar lengan atas 12cm</li>
                        <li>M: Panjang 42.5cm, lebar lengan bawah 8cm, lebar lengan atas 13cm</li>
                        <li>L: Panjang 44.5cm, lebar lengan bawah 9cm, lebar lengan atas 14cm</li>
                        <li>XL: Panjang 46.5cm, lebar lengan bawah 10cm, lebar lengan atas 15cm</li>
                      </ul>
                      Setiap pembelian mendapatkan 1 pasang (kiri - kanan) + packaging berupa pouch kecil <br><br>
                      Cara Label :
                      <ul>
                        <li>Dapat dicuci mesin, tidak perlu disetrika, Jangan gunakan Pemutih</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div v-else>
                  <div class="detail">
                    <p>Sarung lengan / manset berfungsi untuk melindungi kulit dari bahaya sinar matahari (Anti UV).
Bahan ice silk, sangat nyaman digunakan sehingga tetap sejuk saat dipakai (lihat gambar thermometer)
Dapat digunakan pria & wanita (Unisex), cocok untuk bersepeda, jogging, hiking, mancing dan lainnya</p>
                  </div>
                </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="classForm">
              <h4>PILIH UKURAN</h4>
              <h6>Anda tidak yakin? Lihat Detail Ukuran</h6>
              <div class="row">
                <div class="col">
                  <form class="">
                    <div class="form-group">
                      <label for="ukuran">Ukuran</label>
                      <select class="custom-select custom-select-sm">
                        <option selected>Size S</option>
                        <option value="1">30 Size M</option>
                        <option value="2">Size L</option>
                        <option value="3">Size XL</option>
                    </select>
                  </div>
                
                  <div class="form-group  ">
                    <label for="exampleFormControlInput1">Jumlah</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="pcs">
                  </div>
                
                      <button type="submit" class="btn btn-primary">Submit</button>
                 
                </form>
                </div>
              </div>
            </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailProduct",
  components: {
    Navbar,
  },

  data: function () {
    return {
      product: [],
      menu: `detail`,
    };
  },

  methods: {
    setProduct: function (data) {
      this.product = data;
      console.log(data);
    },
    active: function (data) {
      // jika isi menu sama dengan data baru dari function active
      if (this.menu === data) {
        // kembalikan isi function berupa true
        return true;
      }
    },
    buttonActive: function (dataButton) {
      // jika data menu sama dengan data menu
      if (this.menu === this.menu) {
        // console.log(dataButton)
        // ubah data menu menjadi data baru dari parameter function button active
        this.menu = dataButton;
      }
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style scoped>
.btnEdit {
  margin: auto 10px;
  background-color: white;
  border: none;
}
.btnEdit.active {
  border: none;
  color: rgba(17, 175, 175, 0.678);
}
.btnEdit:hover {
  color: rgb(109, 211, 177);
  transition: 0.4s;
}

.classForm {
  padding: 10px;
  border: 1px solid rgb(204, 203, 203);
}
</style>