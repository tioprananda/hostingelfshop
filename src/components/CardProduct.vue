<template>
   
    <div class="card border-0 shadow mx-2">
       <router-link :to="'/product/'+productprop.id">
        <img
        :src="'assets/pakaian/'+productprop.gambar"
        class="card-img-top"
        alt="..."
      />
       </router-link> 
      <div class="card-body">
        <h6 class="card-title">{{productprop.nama}}</h6>
        <h5 class="card-subtitle">Rp. {{productprop.harga}}</h5>
      </div>
    </div>

</template>
  
  <script>
export default {
  name: `CardProduct`,
  props: [`productprop`],
};
</script>
  
  <style scoped>
  .card {
    /* height: 320px; */
    margin: 30px auto;
    padding: 10px 10px;
  }

  .card-body{
  text-align: center;
  }
  .card-body h5 {
    color: rgb(35, 129, 98);
  }
  
</style>