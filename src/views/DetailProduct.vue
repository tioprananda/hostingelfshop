<template>
  <div class="detailProduct">
    <Navbar/>
    <div class="container-fluid mt-2 mb-5">
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
            <div class="col-md-5 mt-5 mb-5 judulForm">
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
                  <form v-on:submit.prevent>
                    <div class="form-group">
                              <label for="ukuran">Ukuran</label>
                              <select class="custom-select custom-select-sm" v-model="pesan.size">
                                <option value="Size S" selected>Size S</option>
                                <option value="30 Size M">30 Size M</option>
                                <option value="Size L">Size L</option>
                                <option value="Size XL">Size XL</option>
                            </select>
                          </div>
                    <div class="form-group">
                      <label for="jumlah">Jumlah Pemesanan</label>
                      <input type="number" class="form-control" v-model="pesan.jumlah">
                    </div>
                    <b-button type="submit" align="center" class="btnSubmit" v-b-modal.modal-center @click="submitOrder">beli</b-button>
                  </form>

                  <!-- MODAL BOX -->
                  <div>
                    <b-modal id="modal-center" centered title="Dalam Keranjang Belanjaan Saya">
                      <div class="row itemKeranjang" v-for="item in checkoutBag" :key="item.id">
                            <div class="col-md-3 itemDetail">
                            <div class="card border-0 shadow mx-2">
                              <img
                                :src="'../assets/pakaian/'+item.products.gambar"
                                class="card-img-top"
                                alt="..."
                              />
                           </div>
                        </div>
                        <div class="col-md-9 itemDetail">
                          <h4>{{item.products.nama}}</h4>
                          <h6>Ukuran : {{item.size}}</h6>
                          <h6>Jumlah : {{item.jumlah}}</h6>
                          <h6>Harga/Item : Rp. {{item.products.harga}}</h6>
                          <h6>Harga/Total : Rp. {{(item.products.harga * item.jumlah)}}</h6>
                          
                          <!-- MODAL BOX KECIL -->
                          <form class="formCustom" v-on:submit.prevent>
                    <div class="form-group">
                              <select class="inputCustom" placeholder="Ubah Size" v-model="item.size">
                                <option value="Size S" selected>Size S</option>
                                <option value="30 Size M">30 Size M</option>
                                <option value="Size L">Size L</option>
                                <option value="Size XL">Size XL</option>
                            </select>
                    </div>
                    <div class="form-group">
                      <input type="number" class="inputCustom" placeholder="Ubah Jumlah" v-model="item.jumlah">
                    </div>
                    <b-button type="submit" align="center" class="btnUbah" v-b-modal.modal-center @click="ubahKeranjang(item.id, item)">Ubah</b-button>
                    <b-button type="submit" align="center" class="btnHapus" v-b-modal.modal-center @click="hapusKeranjang(item.id)">Hapus</b-button>
                  </form>

                          </div>
                        </div>
                        <h5 class="totalBelanja"><strong>Total Belanja ({{checkoutBag.length}} pcs) : Rp. {{totalHarga}}</strong></h5>
                    </b-modal>
                  </div>

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
import { mapState, mapActions, mapGetters, } from "vuex";

export default {
  name: "DetailProduct",
  components: {
    Navbar,
  },

  data: function () {
    return {
    
      menu: `detail`,
    };
  },

  computed : {

    ...mapGetters([`totalHarga`,]),
    ...mapState([`product`,`checkoutBag`,`pesan`]),
   
  },

  methods: {

    ...mapActions([`setCheckout`,`setProductId`]),
   

    ubahKeranjang: function (id, item) {
      axios
      .put("http://localhost:3000/checkout/"+id,
      {
        id : item.id,
        jumlah: item.jumlah,
        size : item.size,
        products: {
          id: item.products.id,
          kode: item.products.kode,
          nama: item.products.nama,
          harga: item.products.harga,
          is_ready: item.products.is_ready,
          gambar: item.products.gambar,
        },
      })
      .then(() => { 
      // this.$router.push({ path : '/keranjang' })
      this.$toast.success(`Pesanan ditambahkan ke keranjang`,{
        duration : 3000,
        message : `Pesanan berhasil ditambahkan`,
        position : `top-right`,
        dismissible : true,
      })
        //  setelah post axios, data checkout akan langsung ditampilkan
        axios
      .get("http://localhost:3000/checkout")
      .then((response) => this.setCheckout(response.data))
      .catch((error) => console.log("gagal : ", error));  
    })
      .catch((error) => console.log("gagal : ", error));
     
    },
  
    hapusKeranjang: function (id) {
      // axios hapus data
      axios
        .delete("http://localhost:3000/checkout/" + id)
        .then(() => {
          this.$toast.success(`Pesanan berhasil dihapus`, {
            duration: 3000,
            message: `Pesanan berhasil dihapus`,
            position: `top-right`,
            dismissible: true,
          });
          // setelah dihapus, panggil kembali data yg tersisa
          axios
            .get("http://localhost:3000/checkout")
            .then((response) => this.setCheckout(response.data))
            .catch((error) => console.log("gagal : ", error));
        })
        // axios gagal mengambil data
        .catch((error) => console.log("gagal : ", error));
    },

    submitOrder : function (){
      if(this.pesan.jumlah){
        this.pesan.products = this.product;
      axios
      .post("http://localhost:3000/checkout",this.pesan)
      .then(() => { 
      // this.$router.push({ path : '/keranjang' })
      this.$toast.success(`Pesanan ditambahkan ke keranjang`,{
        duration : 3000,
        message : `Pesanan berhasil ditambahkan`,
        position : `top-right`,
        dismissible : true,
      })
        //  setelah post axios, data checkout akan langsung ditampilkan
        axios
      .get("http://localhost:3000/checkout")
      .then((response) => this.setCheckout(response.data))
      .catch((error) => console.log("gagal : ", error));  
    })
      .catch((error) => console.log("gagal : ", error));
      }else{
        this.$toast.error(`Jumlah pesanan harus diisi`,{
        duration : 3000,
        message : `Jumlah pesanan harus diisi`,
        position : `top-right`,
        dismissible : true,
      })
      }
  
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

    this.setProductId(this.$route.params.id);
    this.setCheckout();
 
  },
};
</script>

<style scoped>
.btnUbah {
  background-color: rgb(230, 208, 19);
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  /* margin: 5px auto; */
}

.btnHapus {
  background-color: rgb(230, 19, 19);
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  /* margin: 5px auto; */
}
  

.formCustom {
  display: flex;
  justify-content: space-around;
}

.inputCustom {
  border-radius: 5px;
  background-color: transparent;
  /* margin: 5px; */
  text-align: center;
  display: flex;
  border: 1px solid grey;
  width: 100px;
  height: 40px;
}

.totalBelanja  {
  text-align: center;
  color: rgb(35, 129, 98);
  display: block;
  margin-top: 30px;
}
.itemDetail {
  border-bottom: 1px solid rgb(209, 209, 209);
  padding: 5px;
}

.judulForm h3 {
  font-size: 25px;
  color: rgb(35, 129, 98);
}

.judulForm h1 {
  font-size: 30px;
}

.btnSubmit {
  padding: 5px;
  font-size: 12px;
  background-color: rgb(70, 135, 156);
  color: white;
  width: 210px;
  text-align: center;
  border: 0px solid transparent;
}

.btnSubmit:hover {
  background: grey;
}
.classForm h4 {
  font-size: 15px;
}

.classForm h6 {
  font-size: 9px;
}

.classForm label {
  font-size: 10px;
}

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
  width: 230px;
  padding: 10px;
  border: 1px solid rgb(204, 203, 203);
}
</style>