import { aksesorisProduct, celanaProduct, topiProduct } from "./actions";

// homeview
export const SET_PRODUCT = (state, product) => {
    state.product = product;
};

export const BEST_PRODUCT = (state, bestProduct) => {
    state.dataBestProduct = bestProduct;
}

// productview
export const SEARCH_PRODUCT = (state, searchProduct) => {
    state.dataSearchProduct = searchProduct;
}

export const SUBMIT_PROSES = (state, e) => {
     //  this.$router.push({ path : '/product' })
     let kirimMouse = state.dataSearch;
     let kirimKeyboard = e.target.value;
     if(kirimMouse || kirimKeyboard === true){
         this.tambahEmit(state.dataSearch);
         state.dataSearch = "";
     }
}

// bajuview 
export const BAJU_PRODUCT = (state, bajuProduct) => {
    state.dataBajuProduct = bajuProduct;
};

// celanaproduct
export const CELANA_PRODUCT = (state, celanaProduct) => {
    state.dataCelanaProduct = celanaProduct;
}

// tasproduct
export const TAS_PRODUCT = (state, tasProduct) => {
    state.dataTasProduct = tasProduct;
}

// kaoskakiproduct
export const KAOSKAKI_PRODUCT = (state, kaoskakiProduct) => {
    state.dataKaoskakiProduct = kaoskakiProduct;
}

// topiProduct
export const TOPI_PRODUCT = (state, topiProduct) => {
    state.dataTopiProduct = topiProduct;
}

// aksesoridproduct
export const AKSESORIS_PRODUCT = (state, aksesorisProduct) => {
    state.dataAksesorisProduct = aksesorisProduct;
}

// detailproduct
export const SETCHECKOUT = (state, setCheckout) => {
    state.checkoutBag = setCheckout;
};

export const SET_PRODUCT_ID = (state, setProductId) => {
    state.product = setProductId;
}