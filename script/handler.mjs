export const handlerInputNama = () => {
    if (cekKarakter(inputNamaProduk.val())) {
        alertInputNamaProduk.html("");
      } else {
        alertInputNamaProduk.html(
          "<span class='alert alert-danger d-block my-2'>Nama tidak boleh kurang dari 6 karakter</span>"
        );
      }
}

export const handlerInputHarga = () => {
  if (!cekAngka(inputHargaProduk.val())) {
    alertInputHargaProduk.html(
      "<span class='alert alert-danger d-block my-2'>Silahkan masukkan angka bukan huruf !!!</span>"
    );
  } else {
    alertInputHargaProduk.html("");
  }
}

export const handlerTambahData = () => {
  const nama = inputNamaProduk.val();
  const harga = inputHargaProduk.val();

  if (cekKarakter(nama) && cekAngka(harga)) {
    tambahData(inputNamaProduk.val(), inputHargaProduk.val());
  }
} 