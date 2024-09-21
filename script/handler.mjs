import { editData, hapusData, tambahData } from "./data.mjs";
import { kosongkanInput, renderData } from "./render.mjs";
import { cekAngka, cekKarakter } from "./util.mjs";

const inputNamaProduk = $(".input-nama-produk");
const inputHargaProduk = $(".input-harga-produk");
const alertInputNamaProduk = $(".peringatan-nama-produk");
const alertInputHargaProduk = $(".peringatan-harga-produk");

export const handlerKlikTombol = (event) => {
  const element = $(event.target);
  if (element.is(".hapus")) {
    const indexYangAkanDihapus = element.attr("data-index");
    handlerHapusData(indexYangAkanDihapus);
  } else if (element.is(".tombol")) {
    console.log('halo');
    const action = element.attr("data-action");
    const index = element.attr("data-index");
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

export const handlerModalMuncul = function (event) {
  kosongkanInput();
  // Button that triggered the modal
  const tombolModal = $(event.relatedTarget);
  // Extract info from data-bs-* attributes
  const action = tombolModal.attr("data-action");
  const nama = tombolModal.attr("data-nama");
  const harga = tombolModal.attr("data-harga");
  const index = tombolModal.attr("data-index");
  // If necessary, you could initiate an Ajax request here
  // and then do the updating in a callback.

  // Update the modal's content.
  const modalTitle = $(this).find(".modal-title");
  const tombol = $(this).find(".tombol");
  tombol.attr("data-action", action);
  switch (action) {
    case "tambah":
      modalTitle.text('Tambah Data Barang');
      tombol.text("Tambah");
      break;
    case "edit":
      modalTitle.text(`Edit Data Barang`);
      tombol.text("Edit");
      inputNamaProduk.val(nama);
      inputHargaProduk.val(harga);
      tombol.attr("data-index", index);   
      break;

    default:
      break;
  }
};

export const handlerEditData = (indexEdit) => {
  const namaEdit = inputNamaProduk.val();
  const hargaEdit = inputHargaProduk.val();
  editData(indexEdit, namaEdit, hargaEdit);
  renderData();
};
