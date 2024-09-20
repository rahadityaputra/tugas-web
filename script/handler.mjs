import { editData, hapusData, tambahData } from "./data.mjs";
import { kosongkanInput, renderData } from "./render.mjs";
import { cekAngka, cekKarakter } from "./util.mjs";

const inputNamaProduk = $(".input-nama-produk");
const inputHargaProduk = $(".input-harga-produk");
const alertInputNamaProduk = $(".peringatan-nama-produk");
const alertInputHargaProduk = $(".peringatan-harga-produk");

export const handlerKlikTombol = (event) => {
  const element = event.target;
  if (element.matches(".hapus")) {
    const indexYangAkanDihapus = element.dataset.index;
    handlerHapusData(indexYangAkanDihapus);
  } else if (element.matches(".tombol")) {
    const action = element.getAttribute("data-action");
    const index = element.getAttribute("data-index");
    switch (action) {
      case "tambah":
        handlerTambahData();
        break;
      case "edit":
        handlerEditData(index);
        break;
      default:
        break;
    }
  }
};

export const handlerInputNama = () => {
  if (cekKarakter(inputNamaProduk.val())) {
    alertInputNamaProduk.html("");
  } else {
    alertInputNamaProduk.html(
      "<span class='alert alert-danger d-block my-2'>Nama tidak boleh kurang dari 6 karakter</span>"
    );
  }
};

export const handlerInputHarga = () => {
  if (!cekAngka(inputHargaProduk.val())) {
    alertInputHargaProduk.html(
      "<span class='alert alert-danger d-block my-2'>Silahkan masukkan angka bukan huruf !!!</span>"
    );
  } else {
    alertInputHargaProduk.html("");
  }
};

export const handlerTambahData = () => {
  const nama = inputNamaProduk.val();
  const harga = inputHargaProduk.val();

  if (cekKarakter(nama) && cekAngka(harga)) {
    tambahData(nama, harga);
  }

  renderData();
};

export const handlerHapusData = (index) => {
  hapusData(index);
  renderData();
};

export const handlerModalMuncul = (event) => {
  kosongkanInput();
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const action = button.getAttribute("data-action");
  const nama = button.getAttribute("data-nama");
  const harga = button.getAttribute("data-harga");
  const index = button.getAttribute("data-index");
  // If necessary, you could initiate an Ajax request here
  // and then do the updating in a callback.

  // Update the modal's content.
  const modalTitle = exampleModal.querySelector(".modal-title");
  const tombol = exampleModal.querySelector(".tombol");
  tombol.setAttribute("data-action", action);
  switch (action) {
    case "tambah":
      modalTitle.textContent = `Tambah Data Barang`;
      tombol.textContent = "Tambah";
      break;
    case "edit":
      modalTitle.textContent = `Edit Data Barang`;
      tombol.textContent = "Edit";
      inputNamaProduk.val(nama);
      inputHargaProduk.val(harga);
      tombol.setAttribute("data-index", index);
      // editData(index, )
      // modalBodyInput.value = action;
      break;

    default:
      break;
  }
};

export const handlerModalHilang = () => {};

export const handlerEditData = (indexEdit) => {
  console.log(indexEdit);
  
  const namaEdit = inputNamaProduk.val();
  const hargaEdit = inputHargaProduk.val();
  console.log(namaEdit, hargaEdit);
  editData(indexEdit, namaEdit, hargaEdit);
  renderData();
};
