<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand><router-link to="/"><img src="../assets/logoelfs.png" alt=""></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="d-flex mr-auto">
          <b-nav-item>
            <router-link to="/" class="nav-link"><b-icon-house /> Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/product" class="nav-link"><b-icon-card-checklist /> Products</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/konfirmasi-pembayaran" class="nav-link"><b-icon-credit-card /> Pembayaran</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login" class="nav-link"><b-icon-people /> Login</router-link>
          </b-nav-item>
          <b-nav-item>
            <b-button type="submit" align="center" class="btnSubmit nav-link" v-b-modal.modal-center><b-icon-cart/> Item</b-button>
                   <div>
                    <b-modal id="modal-center" centered title="Dalam Keranjang Belanjaan Saya">
                      <div class="row">
                        <div class="col-md-3">
                            <div class="card border-0 shadow mx-2">
                              <img
                      src="'../assets/pakaian/'"
                      class="card-img-top"
                      alt="..."
                    />
                            </div>
                        </div>
                        <div class="col-md-9">
                          
                        </div>
                      </div>
                    </b-modal>
                  </div> 
          </b-nav-item>
        </b-navbar-nav>
        <!-- @keyup.enter="$emit('tambah',$event)" -->
        <!-- v-on:submit.prevent="submitproses" -->
        <form class="d-flex ml-auto" role="search" v-on:submit.prevent="submitproses">
            <input
            @keyup.enter="submitproses"
            v-model="dataSearch"
              class="form-control me-2"
              type="text"
              placeholder="Search" 
              aria-label="Search"/>
            <button class="btn btn-dark" type="submit">
              <b-icon-search />
            </button>
          </form>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: `Navbar`,
  data: function(){
    return {
      dataSearch : ``,
    }
  },
  methods : {
  submitproses : function(e){
    let kirimMouse = this.dataSearch;
    let kirimKeyboard = e.target.value;
    if(kirimMouse || kirimKeyboard === true){
        this.$emit('submitproses',this.dataSearch);
        this.dataSearch = "";
    }
  },
  }
};
</script>

<style scoped>
.nav-link {
    color: white;
}

.btnSubmit {
  background-color: transparent;
  border : 0px solid transparent;
}
</style>
