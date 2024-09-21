export let products = [];

export const tambahData = (nama, harga) => {
  products.push({ nama, harga });
};

export const hapusData = (indexData) => {
  products.splice(indexData, 1);
};

// export const editData = (indexEdit, namaEdit, hargaEdit) => {
//   products = products.map(({ nama, harga }, index) => {
//     if (indexEdit == index) {
//       console.log("sama");
//       return { nama : namaEdit, harga : hargaEdit };
//     }
//     return { nama, harga };
//   });
//     // console.log(products);
// };

export const editData = (indexEdit, namaEdit, hargaEdit) => {
  products = $.map(products, ({ nama, harga }, index) => {
    if (indexEdit == index) {
      return { nama : namaEdit, harga : hargaEdit };
    }
    return { nama, harga };
  });    
  };
