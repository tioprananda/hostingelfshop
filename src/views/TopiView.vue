<template>
  <div class="topView">
    <Navbar />
    <div class="container">
        <div class="row">
          <ul class="nav justify-content-center col-md-3" v-for="item in dataTopiProduct" :key="item.id">
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
name : `TopiView`,
components : {
  Navbar,
  CardProduct
},
computed : {
  
}
}
</script>

<style>

</style>