<template>
    <div class="baju">
      <Navbar></Navbar>
      <div class="container mb-5">
        <div class="row">
          <ul
            class="col-md-3 nav justify-content-center"
            v-for="item in dataBajuProduct"
            :key="item.id"
          >
            <li class="nav-item">
              <CardProduct :productprop="item"></CardProduct>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import CardProduct from "@/components/CardProduct.vue";
  import { mapState, mapActions } from "vuex";
  
  export default {
    name: `BajuView`,
    components: {
      Navbar,
      CardProduct,
    },
    data: function () {
      return {
  
      };
    },
    computed: {
      ...mapState([`dataBajuProduct`]),
      caridata: function () {
        return this.$store.state.caridata;
      },
    },

    methods:{
        ...mapActions([`bajuProduct`])
    },
  
    mounted(){
      this.bajuProduct();
  
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
    color: rgb(109, 211, 177);
    transition: 0.4s;
  }
  </style>