
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand
        ><router-link to="/"
          ><img src="../assets/logoelfs.png" alt="" /></router-link
      ></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="d-flex mr-auto">
          <b-nav-item>
            <router-link to="/" class="nav-link"
              ><b-icon-house /> Home</router-link
            >
          </b-nav-item>
          <!-- <b-nav-item>
            <router-link to="/product" class="nav-link"
              ><b-icon-card-checklist /> Products</router-link
            >
          </b-nav-item> -->
          <b-nav-item>
            <router-link to="/konfirmasi-pembayaran" class="nav-link"
              ><b-icon-credit-card /> Pembayaran</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login" class="nav-link"
              ><b-icon-people /> Login</router-link
            >
            <!-- DETAIL PRODUCT -->
          </b-nav-item>

          <b-nav-item align="right">
            <b-button type="submit" align="right" class="btnCart nav-link" v-b-modal.modal-center @click="cartDetail"><b-icon-cart/> {{checkoutBag.length}} Item</b-button>
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
          </b-nav-item>

          <b-nav-item>
            <form 
          class="d-flex ml-auto mx-2"
          role="search"
          v-on:submit.prevent="submitproses"
        >
          <input
            @keyup.enter="submitproses"
            v-model="dataSearch"
            class="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            required
          />
          <button class="btn btn-dark" type="submit">
            <b-icon-search />
          </button>
        </form>
          </b-nav-item>

        </b-navbar-nav>
       
      </b-collapse>
    </b-navbar>

    <!-- BUTTON NAVIGASI -->
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col mt-5">
          <ul class="nav justify-content-center">
            <li class="nav-item mt-2">
              <router-link to="/product"
                ><button
                  type="button"
                  class="btnEdit"
                  :class="{ active: active(``) }"
                  @click="buttonActive(``)"
                >
                  <b-icon-filter /> Semua
                </button></router-link
              >
              <router-link to="/product"
                ><button
                  type="button"
                  class="btnEdit"
                  :class="{ active: active(`baju`) }"
                  @click="buttonActive(`baju`)"
                >
                  Baju
                </button></router-link
              >
              <router-link to="/product">
                <button
                type="button"
                class="btnEdit"
                :class="{ active: active(`celana`) }"
                @click="buttonActive(`celana`)"
              >
                Celana
              </button>
              </router-link>

              <router-link to="/product">
                <button
                type="button"
                class="btnEdit"
                :class="{ active: active(`tas`) }"
                @click="buttonActive(`tas`)"
              >
                Tas
              </button>
              </router-link>
              <router-link to="/product">
                <button
                type="button"
                class="btnEdit"
                :class="{ active: active(`kaoskaki`) }"
                @click="buttonActive(`kaoskaki`)"
              >
                Kaos Kaki
              </button>
              </router-link>
              <router-link to="/product"><button
                type="button"
                class="btnEdit"
                :class="{ active: active(`topi`) }"
                @click="buttonActive(`topi`)"
              >
                Topi
              </button></router-link>
              <router-link to="/product">
                <button
                type="button"
                class="btnEdit"
                :class="{ active: active(`aksesoris`) }"
                @click="buttonActive(`aksesoris`)"
              >
                Aksesoris
              </button>
              </router-link>
              
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions,mapState, mapGetters } from 'vuex';
export default {
  name: `Navbar`,
  data: function () {
    return {
      menu: ``,
      caridata: ``,
      dataSearch: ``,
    };
  },
  computed: {
    dataSearchProduct: function () {
      return this.$store.state.dataSearchProduct;
    },

    ...mapGetters([`totalHarga`,]),
    ...mapState([`product`,`checkoutBag`,`pesan`]),

  },
  methods: {

    ...mapActions([`setCheckout`,`setProductId`,`setProductId`]),

    cartDetail: function() {
      this.setCheckout();
    },

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

    routeProduct: function () {
      this.$router.push("/product").catch(()=>{});
      // this.$router.push({ path: "/product" });
    },
    submitproses: function (e) {
      this.routeProduct();
      //  this.$store.dispatch(`submitproses`,e);
      let kirimMouse = this.dataSearch;
      let kirimKeyboard = e.target.value;
      if (kirimMouse || kirimKeyboard === true) {
        this.tambahEmit(this.dataSearch);
        this.dataSearch = "";
      }
    },
    tambahEmit: function (event) {
      let dataCari = event;
      this.caridata = dataCari;
      this.cariproduct();
      // console.log(event)
    },
    cariproduct: function () {
      this.$store.dispatch(`searchProduct`, this.caridata);
    },
    active: function (data) {
      // jika isi menu sama dengan data baru dari function active
      if (this.menu === data) {
        // kembalikan isi function berupa true
        return true;
      }
    },
    buttonActive: function (dataButton) {
      // this.routeProduct();
      //  this.$router.push({ path : '/product' })
      // jika data menu sama dengan data menu
      if (this.menu === this.menu) {
        // console.log(dataButton)
        // ubah data menu menjadi data baru dari parameter function button active
        this.menu = dataButton;
        this.caridata = this.menu;
        this.cariproduct();
        console.log(this.caridata);
      }
    },
  },

  mounted() {
    this.setProductId(this.$route.params.id);
    
  },

  updated() {
     this.$store.dispatch(`searchProduct`,this.caridata);
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

.btnCart {
  background-color: rgba(17, 175, 175, 0.678);
  width: 120px;
}

.nav-link {
  color: white;
}
.btnSubmit {
  background-color: transparent;
  border: 0px solid transparent;
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
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
harajuku/Navbar.vue at main · tioprananda/harajuku