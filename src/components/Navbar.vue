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
            <router-link to="/item" class="nav-link"><b-icon-cart /> Item</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <form class="d-flex ml-auto" role="search">
            <input
            @keyup.enter="$emit('tambah',$event)"
              class="form-control me-2"
              type="search"
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
      
    }
  },
  methods : {
  
  }
};
</script>

<style scoped>
.nav-link {
    color: white;
}
</style>
