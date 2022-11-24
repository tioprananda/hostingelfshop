<template>
   
    <div class="card border-0 shadow mx-2">
      <img
        :src="'assets/pakaian/'+productprop.gambar"
        class="card-img-top"
        alt="..."
      />
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
    height: 350px;
    margin: 30px auto;
    padding: 0 20px;
  }

  .card-body{
  text-align: center;
  }
  .card-body h5 {
    color: rgb(35, 129, 98);
  }
  
</style>