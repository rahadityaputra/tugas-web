import {
  handlerInputHarga,
  handlerTambahData,
  handlerInputNama,
  handlerModalMuncul,
  handlerModalHilang,
  handlerKlikTombol,
} from "./handler.mjs";

const inputNamaProduk = $(".input-nama-produk");
const inputHargaProduk = $(".input-harga-produk");
const tombolTambah = $(".tambah");
const exampleModal = $("#exampleModal");


$(function () {
  inputNamaProduk.on("input", handlerInputNama);
  inputHargaProduk.on("input", handlerInputHarga);
  // tombolTambah.on("click", handlerTambahData);
  $(document).on("click", handlerKlikTombol);
  exampleModal.on('show.bs.modal', handlerModalMuncul);
  exampleModal.on('hide.bs.modal', handlerModalHilang);
});
