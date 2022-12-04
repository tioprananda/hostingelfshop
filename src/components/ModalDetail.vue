<template>
 
     <!-- MODAL BOX -->
     <div>
                    <b-modal id="modal-center" centered title="Dalam Keranjang Belanjaan Saya">
                      <div class="row itemKeranjang" v-for="item in checkoutBagProps" :key="item.id">
                            <div class="col-md-3 itemDetail">
                            <div class="card border-0 shadow mx-2">
                              <img
                                :src="'../assets/pakaian/'+item.products.gambar"
                                class="card-img-top"
                                alt="..."
                              />
                           </div>
                        </div>
                        <div class="col-md-9 itemDetail">
                          <h4>{{item.products.nama}}</h4>
                          <h6>Ukuran : {{item.size}}</h6>
                          <h6>Jumlah : {{item.jumlah}}</h6>
                          <h6>Harga/Item : Rp. {{item.products.harga}}</h6>
                          <h6>Harga/Total : Rp. {{(item.products.harga * item.jumlah)}}</h6>
                          
                          <!-- MODAL BOX KECIL -->
                          <form class="formCustom" v-on:submit.prevent>
                    <div class="form-group">
                              <select class="inputCustom" placeholder="Ubah Size" v-model="item.size">
                                <option value="Size S" selected>Size S</option>
                                <option value="30 Size M">30 Size M</option>
                                <option value="Size L">Size L</option>
                                <option value="Size XL">Size XL</option>
                            </select>
                    </div>
                    <div class="form-group">
                      <input type="number" class="inputCustom" placeholder="Ubah Jumlah" v-model="item.jumlah">
                    </div>
                    <b-button type="submit" align="center" class="btnUbah" v-b-modal.modal-center @click="ubahKeranjang(item.id, item)">Ubah</b-button>
                    <b-button type="submit" align="center" class="btnHapus" v-b-modal.modal-center @click="hapusKeranjang(item.id)">Hapus</b-button>
                  </form>

                          </div>
                        </div>
                        <h5 class="totalBelanja"><strong>Total Belanja ({{checkoutBagProps.length}} pcs) : Rp. {{totalHargaProps}}</strong></h5>
                    </b-modal>
                  </div>

</template>

<script>
import axios from "axios";

export default {
name:`ModalDetail`,
props:[`checkoutBagProps`,`totalHargaProps`],
data : function () {
    return {
     
    }
},
methods:{

    setCheckout: function (data) {
      this.checkoutBagProps = data;
    },

    ubahKeranjang: function (id, item) {

      axios
      .put("http://localhost:3000/checkout/"+id,
      this.$emit('ubahproses', 
      {
        id : item.id,
        jumlah: item.jumlah,
        size : item.size,
        products: {
          id: item.products.id,
          kode: item.products.kode,
          nama: item.products.nama,
          harga: item.products.harga,
          is_ready: item.products.is_ready,
          gambar: item.products.gambar,
        },
    }))
    
     
    },
  
    hapusKeranjang: function (id) {
      // axios hapus data
      axios
        .delete("http://localhost:3000/checkout/" + id)
        .then(() => {
          this.$toast.success(`Pesanan berhasil dihapus`, {
            duration: 3000,
            message: `Pesanan berhasil dihapus`,
            position: `top-right`,
            dismissible: true,
          });
          // setelah dihapus, panggil kembali data yg tersisa
          axios
            .get("http://localhost:3000/checkout")
            .then((response) => this.setCheckout(response.data))
            .catch((error) => console.log("gagal : ", error));
        })
        // axios gagal mengambil data
        .catch((error) => console.log("gagal : ", error));
    },
},

computed: {
    totalHargaProps: function () {
      return this.checkoutBagProps.reduce((acc, curr) => {
        return acc + curr.products.harga * curr.jumlah;
      }, 0);
    },
  },
}
</script>

<style scoped>
.btnUbah {
  background-color: rgb(230, 208, 19);
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  /* margin: 5px auto; */
}

.btnHapus {
  background-color: rgb(230, 19, 19);
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  /* margin: 5px auto; */
}
  

.formCustom {
  display: flex;
  justify-content: space-around;
}

.inputCustom {
  border-radius: 5px;
  background-color: transparent;
  /* margin: 5px; */
  text-align: center;
  display: flex;
  border: 1px solid grey;
  width: 100px;
  height: 40px;
}

.totalBelanja  {
  text-align: center;
  color: rgb(35, 129, 98);
  display: block;
  margin-top: 30px;
}
.itemDetail {
  border-bottom: 1px solid rgb(209, 209, 209);
  padding: 5px;
}
</style>