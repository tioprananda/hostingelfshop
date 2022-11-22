<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="d-flex mr-auto">
          <b-nav-item>
            <router-link to="/"><b-icon- /> Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/products"><b-icon- /> Products</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/konfirmasi-pembayaran"><b-icon-credit-card /> Pembayaran</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login"><b-icon-people /> Login</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/item"><b-icon-cart /> Item</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <form class="d-flex ml-auto" role="search">
            <input
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
};
</script>

<style></style>
