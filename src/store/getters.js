
// detailproduct
export const totalHarga = (state) => {
      return state.checkoutBag.reduce((acc, curr) => {
        return acc + curr.products.harga * curr.jumlah;
      }, 0);
   
};

export const rincian = (state) => {
  return state.menu === `detail`;
};

export const checkoutBagGetter = state => state.products;

export const pesanGetter = (state) => {
  return state.pesan.find((item) => {
    return item.id === state.product.id;
  })
}