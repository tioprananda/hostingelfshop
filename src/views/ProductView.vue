<template>
  <div class="product">
    <Navbar class="mb-5"  v-on:tambah="tambahEmit($event)"></Navbar>
    <div class="container mt-5 mb-5">
      <div class="row mt-5">
        <div class="col mt-5">
          <ul class="nav justify-content-center">
            <li class="nav-item mt-2">
                <button type="button" class="btnEdit" :class="{active:active(`semua`)}" @click = "buttonActive(`semua`)"><b-icon-filter/> Semua</button>
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
        <ul class="col-md-3 nav justify-content-center" v-for="item in product" :key="item.id" >
            <li class="nav-item"><CardProduct :productprop="item"></CardProduct></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: `product`,
  components: {
    Navbar,
    CardProduct,
  },
  data:function(){
    return{
      menu : `semua`,
      product: [],
      caridata : ``,
      // dataCari : '',
    }
  },
  methods : {
    setProduct: function (data) {     
      this.product = data;
      console.log(this.product)
    },
    tambahEmit: function(event){
      let dataCari = event.target.value;
      this.caridata = dataCari;
      this.cariproduct();
    },
    cariproduct : function(){
      axios
      .get("http://localhost:3000/products?q="+this.caridata)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
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
				// ubah data menu menjadi data baru dari parameter function button active
				return this.menu = dataButton;
			}
		},
    
  },
  mounted(){
    axios
      .get("http://localhost:3000/products?q="+this.caridata)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
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