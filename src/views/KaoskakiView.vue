<template>
  <div class="kaoskakiview">
    <Navbar />
    <div class="container">
        <div class="row">
            <ul class="nav col-md-3 justify-content-center" v-for="item in dataKaosKakiProduct" :key="item.id">
            <li class="nav-item"><CardProduct :productprop="item"/></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardProduct from '@/components/CardProduct.vue'
import { mapState, mapActions } from 'vuex';
export default {
  name : `KaoskakiView`,
  components : {
    Navbar,
    CardProduct,
  },
  computed : {
    ...mapState([`dataKaoskakiProduct`])
  },
  methods: {
    ...mapActions([`kaoskakiProduct`])
  },
  mounted(){
    this.kaoskakiProduct();
  }

}
</script>

<style>

</style>