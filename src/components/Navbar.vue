
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
          </b-nav-item>

          <b-button type="submit" align="center" class="btnCart" v-b-modal.modal-center @click="showCart"><b-icon-cart/> Item</b-button>

        </b-navbar-nav>
        <form 
          class="d-flex ml-auto"
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
          />
          <button class="btn btn-dark" type="submit">
            <b-icon-search />
          </button>
        </form>
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
import { mapActions,mapState } from 'vuex';
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

    ...mapState([`product`]),
  },
  methods: {

    ...mapActions([`setProductId`]),

    showCart : function () {
      this.$router.push("/product"+this.$routes.params.id).catch(()=>{});
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
.btnCart {
  background-color: rgba(17, 175, 175, 0.678);
  width: 100px;
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