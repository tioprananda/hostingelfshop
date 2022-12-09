
// detailproduct
export const totalHarga = (state) => {
      return state.checkoutBag.reduce((acc, curr) => {
        return acc + curr.products.harga * curr.jumlah;
      }, 0);
   
}
