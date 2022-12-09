import axios from "axios";

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
}
