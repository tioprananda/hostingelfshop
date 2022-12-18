<template>
  <div class="prosesBayar">
    <Navbar/>
    <div class="container">
        <div class="row mb-3">
            <div class="col-md-7 alamatPesan">
                
                    <h3>Alamat Pemesanan</h3>

                    <!-- form -->

                    <form @submit.prevent="submitBayar">
                    <div class="mb-3">
                        <label for="namalengkap" class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" id="namalengkap" v-model="bayar.nama" required>  
                    </div>
                    <div class="mb-3">
                        <label for="telepon" class="form-label">Telepon</label>
                        <input type="number" class="form-control" id="telepon" v-model="bayar.telepon" required>  
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="bayar.email" required>  
                    </div>
                    <div class="mb-3">
                    <label for="alamat" class="form-label">Alamat</label>
                    <textarea class="form-control" id="alamat" rows="5" v-model="bayar.alamat" required></textarea>
                    </div>
    
                    <button type="submit" class="btn btn-primary btnBayar" @click="kembali">Kembali</button>
                    <button type="submit" class="btn btn-primary btnBayar">Bayar</button>
                    </form>
                
            </div>
            <div class="col-md-5">
                <h3>LANGKAH SELANJUTNYA :</h3>
                <P>
                    <strong> BELUM MENJADI MEMBER : </strong><br>
                    1. anda bisa langsung melakukan pembelian tanpa harus daftar
                    isi alamat pemesanan, lanjutkan <br>
                    <br>
                    2. Jika anda menjadi MEMBER, <br>
                    akan banyak DISKON & keuntungan lainnya
                    klik untuk daftar di kanan atas
                    setelah mendaftar,
                    anda bisa langsung melanjutkan pesanan anda <br>
                    <br>
                    <strong> MEMBER : </strong> <br>
                    langsung klik masuk di kanan atas <br>
                </P>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import { mapState, mapActions } from 'vuex';
export default {
name : `prosesBayar`,
components : {
    Navbar,
},
data(){
    return{
    }
},
computed : {
    ...mapState([`bayar`,`checkoutBag`]),
},
methods : {

    ...mapActions([`prosesBayar`]),

    kembali : function () {
        this.$router.push(`/`)
    },
    submitBayar : function() {

        this.bayar.order = this.checkoutBag;
        this.prosesBayar({
            dataBayar : this.bayar,
            bag : this.checkoutBag,
        });
        this.$toast.success(`Proses pembayaran berhasil`,{
        duration : 3000,
        message : `Pesanan berhasil ditambahkan`,
        position : `top-right`,
        dismissible : true,})

        this.$router.push(`/bayar`);
    }
},
}
</script>

<style scoped>
.alamatPesan h3 {
    text-align: center;
}
.alamatPesan {
    padding: 20px;
    background: rgb(241, 241, 241);
    border-radius: 10px;
}

.btnBayar {
    
    margin: 5px;
}


</style>