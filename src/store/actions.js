import axios from 'axios'

// homeview
export const setProduct = ({commit}) => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        commit(`SET_PRODUCT`, response.data)
      })
      .catch((error) => console.log("gagal : ", error));
};

export const bestProduct = ({commit}) => {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        commit('BEST_PRODUCT',response.data)
      })
      .catch((error) => console.log("gagal : ", error));
};

// productview
export const searchProduct = ({commit}, dataSearch) => {
  axios
  .get("http://localhost:3000/products?q="+dataSearch)
  .then((response) => {
    commit(`SEARCH_PRODUCT`, response.data)
  })
  .catch((error) => console.log("gagal : ", error));
};

// bajuview
export const bajuProduct = ({commit}) => {
  axios
  .get("http://localhost:3000/products?q=baju")
  .then((response) => {
    commit(`BAJU_PRODUCT`, response.data)
  })
  .catch((error) => console.log("gagal : ", error));
};

// celanaview
export const celanaProduct = ({commit}) => {
  axios
  .get("http://localhost:3000/products?q=celana")
  .then((response) => {
    commit(`CELANA_PRODUCT`,response.data)
  })
  .catch((error) => console.log(`gagal : ${error}`))
};

// tasview
export const tasProduct = ({commit}) => {
  axios
  .get('http://localhost:3000/products?q=tas')
  .then((response) => {
    commit(`TAS_PRODUCT`,response.data)
  })
  .catch((error) => console.log(`gagal : ${error}`))
};

// kaoskakiview
export const kaoskakiProduct = ({commit}) => {
  axios 
  .get('http://localhost:3000/products?q=kaoskaki')
  .then((response) => {
    commit(`KAOSKAKI_PRODUCT`,response.data)
  })
  .catch((error) => console.log(`gagal : ${error}`))
};

// topiview
export const topiProduct = ({commit}) => {
  axios
  .get('http://localhost:3000/products?q=topi')
  .then((response) => {
    commit(`TOPI_PRODUCT`,response.data)
  })
  .catch((error) => console.log(`gagal : ${error}`))
};

// aksesorisview
export const aksesorisProduct = ({commit}) => {
  axios
  .get('http://localhost:3000/products?q=aksesoris')
  .then((response)=>{
    commit(`AKSESORIS_PRODUCT`,response.data)
  })
  .catch((error) => console.log(`gagal : ${error}`))
};

// searcview
// export const searchProduct = ({commit}) => {
  
// }

// navbar
export const submitproses = ({commit}, e) => {
  commit(`SUBMIT_PROSES`, e);
}

// detailproduct
export const setCheckout = ({commit}) => {
   axios
            .get("http://localhost:3000/checkout")
            .then((response) => {
              commit(`SETCHECKOUT`, response.data)
            })
            .catch((error) => console.log("gagal : ", error));
};

export const setProductId = ({commit}, paramsId) => {
   axios
      .get("http://localhost:3000/products/" + paramsId)
      .then((response) => {
        commit(`SET_PRODUCT_ID`, response.data)
      })
      .catch((error) => console.log("gagal : ", error));
};

// export const orderProduct = ({commit}, pushOrder) => {
//   commit(`ORDER_PRODUCT`, pushOrder);
// };

// bayar
export const prosesBayar = async ({commit}, {dataBayar, bag}) => {
 await axios
  .post(`http://localhost:3000/bayar`,dataBayar)
  .then((response) => {
    commit(`PROSES_BAYAR`, response.data);
    bag.map((item) => {
      return axios 
      .delete("http://localhost:3000/checkout/" + item.id)
    })
    console.log(dataBayar)
    console.log(bag)
  })
}
