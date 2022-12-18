
// detailproduct
export const totalHarga = (state) => {
      return state.checkoutBag.reduce((acc, curr) => {
        return acc + curr.products.harga * curr.jumlah;
      }, 0);
   
};

export const rincian = (state) => {
  return state.menu === `detail`;
};