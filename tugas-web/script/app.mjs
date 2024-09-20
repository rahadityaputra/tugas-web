import { handlerInputHarga, handlerTambahData , handlerInputNama} from "./handler.mjs";

$(function () {
    // muculkanPeringatanDataKosong();
    inputNamaProduk.on("input", handlerInputNama);
    inputHargaProduk.on("input", handlerInputHarga);
  
    tombolTambah.on("click", handlerTambahData);


    $(document).on("click", function (event) {
      const element = event.target;

      if (element.matches("edit")) {
        console.log("hahahahah");
      } else if (element.matches("hapus")) {
        console.log("hapus");
      } else if (element.matches("edit")) {
        console.log("edit");
      }
    });
  });
  