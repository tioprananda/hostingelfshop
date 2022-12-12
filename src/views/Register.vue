<template>
  <div class="register">
    <Navbar />
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-md-5 borderLogin">
<<<<<<< HEAD
          <div class="container formLogin">
            <h3 class="text-center">MASUK</h3><br>
=======
          
            <h4 class="text-center">MASUK</h4><br>
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
            <!-- <b-modal id="modalLogin" class="d-block text-center" centered title="Masuk"> -->
            <form ref="form" @submit.stop.prevent="login">
              <!-- email -->
              <b-form-group
    
                label="Email *"
                label-for="email"
                invalid-feedback="email is required"
              >
                <b-form-input
                placeholder="Email Address"
                  id="email"
                  v-model="email"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- password -->
              <b-form-group
                label="Password *"
                label-for="password"
                invalid-feedback="password is required"
              >
                <b-form-input
                placeholder="Password"
                  id="password"
                  v-model="password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                  class="mt-3"
                  type="submit"
                  variant="info"
                  block
                  @click="masuk"
                   >Masuk</b-button
                >
            </form><br>

            <!-- lupa password -->
            <div class="lupa">
                <p>Lupa Password ? <br>
                Password akan dikirim ke email anda.
                </p>
                <form ref="form" @submit.stop.prevent="login">
                    <b-form-group
                label="Email *"
                label-for="email"
                invalid-feedback="email is required"
              >
                <b-form-input
                placeholder="Email Address"
                  id="email"
                  v-model="emailLupa"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                class="mt-3"
                type="submit"
                variant="info"
                block
                @click="kirim"
                 >Kirim</b-button
              >
              
                </form>

            </div>

<<<<<<< HEAD
          </div>
        </div>

        <div class="col-md-5 borderRegister">
          <div class="container formRegister">
            <h3 class="text-center">DAFTAR AKUN ELFS SHOP</h3><br>
=======
          
        </div>

        <div class="col-md-5 borderRegister">
            <h4 class="text-center">DAFTAR AKUN ELFS SHOP</h4><br>
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
            <form ref="form" @submit.stop.prevent="login">
              <!-- email -->
              <b-form-group
    
                label="Nama *"
                label-for="nama"
                invalid-feedback="nama is required"
              >
                <b-form-input
                placeholder="Nama Lengkap"
                  id="nama"
                  v-model="namaRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Email *"
                label-for="email"
                invalid-feedback="email is required"
              >
                <b-form-input
                placeholder="Alamat Email"
                  id="email"
                  v-model="emailRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Nomor Handphone *"
                label-for="nomor handphone"
                invalid-feedback="nomor handphone is required"
              >
                <b-form-input
                placeholder="Nomor Handphone"
                  id="nomor"
                  v-model="nomorRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Buat Password *"
                label-for="Buat Password"
                invalid-feedback="Buat Password is required"
              >
                <b-form-input
                placeholder="Password mengandung huruf kecil, besar dan angka"
                  id="password"
                  v-model="passwordRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Konfirmasi Password *"
                label-for="Konfirmasi Password"
                invalid-feedback="Konfirmasi Password is required"
              >
                <b-form-input
                placeholder="Ulangi Password"
                  id="passwordRepeat"
                  v-model="konfirmasiPasswordRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Konfirmasi Password *"
                label-for="Konfirmasi Password"
                invalid-feedback="Konfirmasi Password is required"
              >
                <b-form-input
                placeholder="Ulangi Password"
                  id="passwordRepeat"
                  v-model="konfirmasiPasswordRegister"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Jenis Kelamin *" label-for="jenis kelamin" invalid-feedback="Jenis Kelamin is required">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Laki-laki">
                  <label class="form-check-label" for="inlineRadio1">Laki-laki</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Perempuan">
                  <label class="form-check-label" for="inlineRadio2">Perempuan</label>
                </div>
              </b-form-group>

              <b-form-group  label="Tanggal Lahir *"
                label-for="tanggal lahir"
                invalid-feedback="Tanggal Lahir is required">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Pilih Tanggal</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Pilih Bulan</option>
                    <option value="Januari">Januari</option>
                    <option value="Februari">Februari</option>
                    <option value="Maret">Maret</option>
                    <option value="April">April</option>
                    <option value="Mei">Mei</option>
                    <option value="Juni">Juni</option>
                    <option value="Juli">Juli</option>
                    <option value="Agustus">Agustus</option>
                    <option value="September">September</option>
                    <option value="Oktober">Oktober</option>
                    <option value="November">November</option>
                    <option value="Desember">Desember</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Pilih Tahun</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                </select>
              </b-form-group>

              <!-- <vue-recaptcha sitekey="Your key here"></vue-recaptcha> -->
              
              <b-button
                  class="mt-3"
                  type="submit"
                  variant="info"
                  block
                  @click="daftar"
                   >Daftar Member Baru</b-button
                >
            </form><br>
<<<<<<< HEAD
          </div>
=======
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import VueRecaptcha from 'vue-recaptcha';
=======
// import VueRecaptcha from 'vue-recaptcha';
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
import Navbar from "@/components/Navbar.vue";
export default {
  name: `Register`,
  components: {
    Navbar,
<<<<<<< HEAD
    VueRecaptcha
=======
    // VueRecaptcha
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
  },
  data : () => {
    return {
      email:``,
      password:``,
      emailLupa :``,
      namaRegister : ``,
      emailRegister:``,
      nomorRegister:``,
      passwordRegister:``,
      konfirmasiPasswordRegister: ``,
    }
  },
  methods: {
    masuk : function(){},
    daftar : function(){},
    kirim: function(){},
  },
};
</script>

<style scoped>
::placeholder{
    font-size: 13px;
}


option {
  font-size: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.form-select {
<<<<<<< HEAD
  margin: 3px;
=======
  margin: 5px;
>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
}

.borderLogin {
    border-right: 1px solid rgb(221, 218, 218);
<<<<<<< HEAD
}
.formLogin {
  padding: 30px;
  width: 440px;
}

.borderRegister {
  margin-left: 0px;
}

.formRegister {
  padding: 30px;
  width: 440px;
}
=======
    padding: 30px;
    width: 440px;
  }

.borderRegister {
  margin-left: 0px;
  padding: 30px;
  width: 440px;

}

>>>>>>> 074260acb75bbef115fe17368012cf8ba93dcc67
</style>