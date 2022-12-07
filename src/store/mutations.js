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