import { products } from "./data.mjs";

const isiTabel = $(".table tbody");
const inputNamaProduk = $(".input-nama-produk");
const inputHargaProduk = $(".input-harga-produk");

export const kosongkanInput = () => {
  inputNamaProduk.val("");
  inputHargaProduk.val("");
};

const muculkanPeringatanDataKosong = () => {
  if (products.length == 0) {
    console.log("data kosong");
    $(".peringatan-data-kosong").html(`
         <span class='alert alert-danger d-block my-2'>Data Masih Kosong</span>
      `);
  } else {
    $(".peringatan-data-kosong").html("");
  }
};

export const renderData = () => {
  muculkanPeringatanDataKosong();
  let html = products
      .map(({ nama, harga }, index) => {
        return `
          <tr>
            <td scope="col">${index + 1}</td>
            <td scope="col">${nama}</td>
            <td scope="col">${harga}</td>
            <td scope="col">
              <button type="button" class="edit btn btn-primary" data-action="edit" data-index="${index}" data-nama="${nama}" data-harga="${harga}" data-bs-toggle="modal" data-bs-target="#exampleModal" ">
                <i class="bi bi-pencil-square"></i>
                Edit
              </button>
              <button type="button" class="hapus btn btn-danger" data-index="${index}">
                <i class="bi bi-x-square"></i>
                Hapus
              </button>
            </td>
          </tr>
          `;
      })
      .join("");    
      isiTabel.html(html);
  
};
