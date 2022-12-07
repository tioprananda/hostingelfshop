<template>
  <div class="product">
    <Navbar class="mb-5"  v-on:submitproses="tambahEmit"></Navbar>
    <div class="container mt-5 mb-5">
      <div class="row mt-5">
        <div class="col mt-5">
          <ul class="nav justify-content-center">
            <li class="nav-item mt-2">
                <button type="button" class="btnEdit" :class="{active:active(``)}" @click = "buttonActive(``)"><b-icon-filter/> Semua</button>
                <button type="button" class="btnEdit" :class="{active:active(`baju`)}" @click = "buttonActive(`baju`)">Baju</button>
                <button type="button" class="btnEdit" :class="{active:active(`celana`)}" @click = "buttonActive(`celana`)">Celana</button>
                <button type="button" class="btnEdit" :class="{active:active(`tas`)}" @click = "buttonActive(`tas`)">Tas</button>
                <button type="button" class="btnEdit" :class="{active:active(`kaoskaki`)}" @click = "buttonActive(`kaoskaki`)">Kaos Kaki</button>
                <button type="button" class="btnEdit" :class="{active:active(`topi`)}" @click = "buttonActive(`topi`)">Topi</button>
                <button type="button" class="btnEdit" :class="{active:active(`aksesoris`)}" @click = "buttonActive(`aksesoris`)">Aksesoris</button>
            </li>
          </ul><hr>
        </div>
      </div>
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
      menu : ``,
      caridata : ``,
      // dataCari : '',
    }
  },
  computed : {
    dataSearchProduct : function () {
      return this.$store.state.dataSearchProduct;  
    }
  },
  methods : {
    
    tambahEmit: function(event){
      let dataCari = event;
      this.caridata = dataCari;
      this.cariproduct();
      // console.log(event)
    },
    cariproduct : function(){
      this.$store.dispatch(`searchProduct`,this.caridata);
    },
    active : function(data) {
			// jika isi menu sama dengan data baru dari function active
			if (this.menu === data) {
				// kembalikan isi function berupa true
				return true;
			}
    },
    buttonActive : function(dataButton){
			// jika data menu sama dengan data menu
			if (this.menu === this.menu) {
        // console.log(dataButton)
				// ubah data menu menjadi data baru dari parameter function button active
				this.menu = dataButton;
        this.caridata = this.menu;
        this.cariproduct();
        console.log(this.caridata)
			}
		},
   
  },
  mounted(){
    this.$store.dispatch(`searchProduct`,this.caridata);
    
  }
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