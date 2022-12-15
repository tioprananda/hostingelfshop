<template>
  <div class="aksesoris">
    <Navbar/>
    <div class="container">
        <div class="row">
            <ul class="nav justify-content-center col-md-3" v-for="item in dataAksesorisProduct" :key="item.id">
                <li class="nav-item"><CardProduct :productprop="item"/></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardProduct from '@/components/CardProduct.vue'
import { mapState,mapActions } from 'vuex';
export default {
name : `AksesorisView`,
components : {
    Navbar,
    CardProduct,
},
computed : {
    ...mapState([`dataAksesorisProduct`])
},
methods: {
    ...mapActions([`aksesorisProduct`])
},
mounted(){
    this.aksesorisProduct()
}
}
</script>

<style>

</style>