<template>
  <div class="search">
    <Navbar/>
    <div class="container">
        <div class="row">
            <ul class="nav justify-content-center col-md-3" v-for="item in dataSearchProduct" :key="item.id">
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
    name : `SearchView`,
    components : {
        Navbar,
        CardProduct,
    },
    computed:{
        ...mapState([`dataSearchProduct`]),
    },
    methods : {
        ...mapActions([`searchProduct`])
    },
    updated(){
        // this.searchProduct();
    }

}
</script>

<style>

</style>