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
          <!-- <b-nav-item>
            <router-link to="/" class="nav-link"
              ><b-icon-house /> Home</router-link
            >
          </b-nav-item> -->
          <!-- <b-nav-item>
            <router-link to="/product" class="nav-link"
              ><b-icon-card-checklist /> Products</router-link
            >
          </b-nav-item> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <!-- HALAMAN PEMBAYARAN -->
          <b-nav-item>
            <router-link to="" class="nav-link"
              ><b-icon-credit-card /> Konfirmasi Pembayaran</router-link
            >
          </b-nav-item>

          <!-- HALAMAN LOGIN -->
          <b-nav-item>
            <router-link to="" class="nav-link" v-b-modal.modalLogin
              ><b-icon-people /> Masuk / Daftar</router-link
            >
            <div>
              <b-modal
                ref="my-modal"
                hide-footer
                id="modalLogin"
                class="d-block text-center"
                centered
                title="Masuk"
              >
                <div class="d-block text-center"></div>
                <form ref="form" @submit.stop.prevent="login">
                  <!-- email -->
                  <b-form-group
                    label="email *"
                    label-for="email"
                    invalid-feedback="email is required"
                  >
                    <b-form-input id="email" v-model="email" required>
                    </b-form-input>
                  </b-form-group>

                  <!-- password -->
                  <b-form-group
                    label="password *"
                    label-for="password"
                    invalid-feedback="password is required"
                  >
                    <b-form-input id="password" v-model="password" required>
                    </b-form-input
                    ><br />

                    <!-- link register -->
                    <router-link to="/register" class="register">
                      Lupa Password? Atau Daftar
                    </router-link>
                  </b-form-group>

                  <!-- tombol login -->
                  <b-button class="mt-3" type="submit" variant="info" block>
                    Masuk
                  </b-button>
                </form>
              </b-modal>
            </div>
          </b-nav-item>

          <!-- HALAMAN ITEM -->
          <b-nav-item>
            <button
              type="submit"
              align="right"
              class="btnCart nav-link"
              v-b-modal.modal-center
            >
              <b-icon-cart /> {{ checkoutBag.length }} Item
            </button>
            <!-- MODAL BOX -->
            <div>
              <b-modal
                id="modal-center"
                centered
                title="Dalam Keranjang Belanjaan Saya"
                ref="my-modal"
                hide-footer
                class="d-block text-center"
              >
                <div
                  class="row itemKeranjang"
                  v-for="item in checkoutBag"
                  :key="item.id"
                >
                  <div class="col-md-3 itemDetail">
                    <div class="card border-0 shadow mx-2">
                      <img
                        :src="'../assets/pakaian/' + item.products.gambar"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div class="col-md-9 itemDetail">
                    <h4>{{ item.products.nama }}</h4>
                    <h6>Ukuran : {{ item.size }}</h6>
                    <h6>Jumlah : {{ item.jumlah }}</h6>
                    <h6>Harga/Item : Rp. {{ item.products.harga }}</h6>
                    <h6>
                      Harga/Total : Rp. {{ item.products.harga * item.jumlah }}
                    </h6>

                    <!-- FORM UBAH DELETE -->
                    <form class="formCustom" v-on:submit.prevent>
                      <div class="form-group">
                        <select
                          class="inputCustom"
                          placeholder="Ubah Size"
                          v-model="item.size"
                        >
                          <option value="All Size" selected>All Size</option>
                          <option value="Size S">Size S</option>
                          <option value="30 Size M">30 Size M</option>
                          <option value="Size L">Size L</option>
                          <option value="Size XL">Size XL</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <input
                          type="number"
                          class="inputCustom"
                          placeholder="Ubah Jumlah"
                          v-model="item.jumlah"
                        />
                      </div>
                      <b-button
                        type="submit"
                        align="center"
                        class="btnUbah"
                        v-b-modal.modal-center
                        @click="ubahKeranjang(item.id, item)"
                        >Ubah</b-button
                      >
                      <b-button
                        type="submit"
                        align="center"
                        class="btnHapus"
                        v-b-modal.modal-center
                        @click="hapusKeranjang(item.id)"
                        >Hapus</b-button
                      >
                    </form>
                  </div>
                </div>
                <h5 class="totalBelanja">
                  <strong
                    >Total Belanja ({{ checkoutBag.length }} pcs) : Rp.
                    {{ totalHarga }}</strong
                  >
                </h5>

                <b-button
                  class="mt-3"
                  type="submit"
                  variant="info"
                  @click="hideModal"
                  block
                >
                  Lanjut Belanja
                </b-button>

                <b-button
                  class="mt-3"
                  type="submit"
                  variant="info"
                  @click="bayar"
                  block
                >
                  Bayar
                </b-button>
              </b-modal>
            </div>
          </b-nav-item>
        </b-navbar-nav>
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
      </b-collapse>
    </b-navbar>

    <!-- BUTTON NAVIGASI -->
    <div class="container-fluid mt-5">
      <div class="row mt-5">
        <div class="col mt-5 justify-content-center">
          <nav class="navbar navbar-expand-lg">
            <div class="navbar-collapse" id="navbarNav2">
              <ul class="navbar-nav menuBaju">
                <li class="nav-item">
                  <router-link class="nav-link" to="/product"
                    ><b-icon-filter /> Semua</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/bajuview"
                    >Baju</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/celanaview"
                    >Celana</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/tasview">Tas</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/kaoskakiview"
                    >Kaos Kaki</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/topiview"
                    >Topi</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/aksesorisview"
                    >Aksesoris</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/searchview" hidden>Search</router-link>
                </li>
              </ul>
            </div>
          </nav>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: `Navbar`,
  data: function () {
    return {
      menu: ``,
      caridata: ``,
      dataSearch: ``,
      email: ``,
      password: ``,
    };
  },
  computed: {
    dataSearchProduct: function () {
      return this.$store.state.dataSearchProduct;
    },

    ...mapGetters([`totalHarga`]),
    ...mapState([`product`, `checkoutBag`, `pesan`]),
  },
  methods: {
    ...mapActions([`setCheckout`, `setProductId`, `setProductId`]),

    bayar: function () {
      this.$router.push({ path: "/prosesbayar" });
    },

    hideModal() {
      this.$refs["my-modal"].hide();
    },

    ubahKeranjang: async function (id, item) {
      parseInt(item.jumlah);
      if(item.jumlah < 1) {
        item.jumlah = 1;
        this.$toast.error(`jumlah minimal belanja 1`, {
            duration: 3000,
            message: `Jumlah Pemesanan Min.1 item`,
            position: `top-right`,
            dismissible: true,})
      }
        await axios
        .put("https://successful-lime-cygnet.cyclic.app/checkout/" + id, {
          id: item.id,
          jumlah: item.jumlah,
          size: item.size,
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
          this.$toast.success(`Pesanan ditambahkan ke keranjang`, {
            duration: 3000,
            message: `Pesanan berhasil diubah`,
            position: `top-right`,
            dismissible: true,
          });
          //  setelah post axios, data checkout akan langsung ditampilkan
          axios
            .get("https://successful-lime-cygnet.cyclic.app/checkout")
            .then((response) => this.setCheckout(response.data))
            .catch((error) => console.log("gagal : ", error));
        })
        .catch((error) => console.log("gagal : ", error));
      
    
    },

    hapusKeranjang: function (id) {
      // axios hapus data
      axios
        .delete("https://successful-lime-cygnet.cyclic.app/checkout/" + id)
        .then(() => {
          this.$toast.error(`Pesanan berhasil dihapus`, {
            duration: 3000,
            message: `Pesanan berhasil dihapus`,
            position: `top-right`,
            dismissible: true,
          });
          // setelah dihapus, panggil kembali data yg tersisa
          axios
            .get("https://successful-lime-cygnet.cyclic.app/checkout")
            .then((response) => this.setCheckout(response.data))
            .catch((error) => console.log("gagal : ", error));
        })
        // axios gagal mengambil data
        .catch((error) => console.log("gagal : ", error));
    },

    routeProduct: function () {
      this.$router.push("/searchview").catch(() => {});
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
      this.caridata = event;
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

  created() {
    this.setCheckout();
  },

  mounted() {
    // this.setProductId(this.$route.params.id);
  },

  updated() {
    //  this.$store.dispatch(`searchProduct`,this.caridata);
  },
};
</script>

<style scoped>
.menuBaju {
  margin: auto;
}

.menuBaju .router-link-exact-active {
  background: transparent;
  color: rgba(17, 175, 175, 0.678);
}

.menuBaju .nav-link:hover {
  color: rgb(79, 137, 175);
}

.register {
  text-decoration: none;
}

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

.totalBelanja {
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
  border: 2px solid transparent;
  /* background-color: transparent; */
  background-color: rgba(17, 175, 175, 0.678);
  width: 150px;
  color: white;
}

.nav-link {
  color: rgb(51, 49, 49);
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