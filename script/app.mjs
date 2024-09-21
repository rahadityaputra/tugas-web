import {
  handlerInputHarga,
  handlerInputNama,
  handlerModalMuncul,
  handlerKlikTombol,
} from "./handler.mjs";

const inputNamaProduk = $(".input-nama-produk");
const inputHargaProduk = $(".input-harga-produk");
const exampleModal = $("#exampleModal");


$(function () {
  inputNamaProduk.on("input", handlerInputNama);
  inputHargaProduk.on("input", handlerInputHarga);
  $(document).on("click", handlerKlikTombol);
  exampleModal.on('show.bs.modal', handlerModalMuncul);
});
