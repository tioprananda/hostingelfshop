<template>
  <div class="celana">
    <Navbar/>
    <div class="container">
        <div class="row">
                <ul class="col-md-3 justify-content-center nav" v-for="item in dataCelanaProduct" :key="item.id">
                  <li class="nav-item"><CardProduct :productprop = "item"/></li>
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
  name : `CelanaView`,
  components : {
    Navbar,
    CardProduct
  },

  computed : {
    ...mapState([`dataCelanaProduct`]),
  },

  methods : {
    ...mapActions([`celanaProduct`])
  },

  mounted() {
    this.celanaProduct();
  },

}
</script>

<style>

</style>