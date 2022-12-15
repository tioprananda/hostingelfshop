<template>
  <div class="tasView">
    <Navbar/>
    <div class="container">
        <div class="row">
            <ul class="col-md-3 nav justify-content-center" v-for="item in dataTasProduct" :key="item.id">
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
  name : `TasView`,
  components : {
    Navbar,
    CardProduct,
  },
  computed : {
    ...mapState([`dataTasProduct`]),
  },
  methods: {
    ...mapActions([`tasProduct`])
  },
  mounted() {
    this.tasProduct();
  }

}
</script>

<style>

</style>