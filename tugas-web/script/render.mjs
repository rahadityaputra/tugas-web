export const kosongkanInput = () => {
    inputNamaProduk.val("");
    inputHargaProduk.val("");
}
  
const muculkanPeringatanDataKosong = () => {
    if (products.length == 0) {
      console.log("data kosong");
      $(".peringatan-data-kosong").html(`
         <span class='alert alert-danger d-block my-2'>Data Masih Kosong</span>
      `);
    } else {
      $(".peringatan-data-kosong").html("");
    }
  }

const tambahData = (nama, harga) => {
    products.push({ nama, harga });
    muculkanPeringatanDataKosong();
    console.log(products);
  
    const html = products
      .map(({ nama, harga }, index) => {
        return `
        <tr>
          <td scope="col">${index + 1}</td>
          <td scope="col">${nama}</td>
          <td scope="col">${harga}</td>
          <td scope="col">
            <button type="button" class="btn btn-primary">
              <i class="bi bi-pencil-square"></i>
              Edit
            </button>
            <button type="button" class="btn btn-danger">
              <i class="bi bi-x-square"></i>
              Hapus
            </button>
          </td>
        </tr>
        `;
      })
      .join("");
  
    console.log(html);
    isiTabel.html(html);
  }