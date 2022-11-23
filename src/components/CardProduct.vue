<template>
   <div class="item mx-2">
    <div class="card border-0 shadow">
      <img
        :src="'assets/pakaian/'+productprop.gambar"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{productprop.nama}}</h5>
        <h5 class="card-subtitle">{{productprop.harga}}</h5>
      </div>
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
</style>