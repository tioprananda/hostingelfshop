<template>
  <div class="product">
    <Navbar></Navbar>
    <div class="container mb-5">
      <div class="row">
        <ul class="col-md-3 nav justify-content-center" v-for="item in dataSearchProduct" :key="item.id" >
            <li class="nav-item"><CardProduct :productprop="item"></CardProduct></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: `product`,
  components: {
    Navbar,
    CardProduct,
  },
  data:function(){
    return{

    }
  },
  computed : {
    dataSearchProduct : function () {
      return this.$store.state.dataSearchProduct;  
    },
    caridata : function () {
      return this.$store.state.caridata;
    }
  },
  
  // mounted(){
  //   this.$store.dispatch(`searchProduct`,this.caridata);
    
  // }
};
</script>

<style scoped>
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
   color :rgb(109, 211, 177);
   transition: .4s;
}
</style>