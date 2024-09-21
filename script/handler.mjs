import { editItemData, removeItemData, addItemData } from "./data.mjs";
import { clearInput, renderItems } from "./render.mjs";
import { isNumber, isNameAtLeastSix } from "./util.mjs";

const inputItemName = $(".input-item-name");
const inputItemPrice = $(".input-item-price");
const notValidNameAlert = $(".not-valid-name-alert");
const notValidPriceAlert = $(".not-valid-price-alert");


export const handleSubmitBtn = (event) => {
  const submitBtn = $(event.target);
  const action = submitBtn.attr("data-action");
  const index = submitBtn.attr("data-index");
  switch (action) {
    case "add":
      handleAddItem();
      break;
    case "edit":
      handleEditItem(index);
      break;
    default:
      break;
  }
};

export const handlerKlikHapus = function ()  {
  const indexYangAkanDihapus = $(this).attr("data-index");
  handlerHapusData(indexYangAkanDihapus);
};

// export const handlerKlik

export const handlerInputNama = () => {
  if (!isNameAtLeastSix(inputItemName.val())) {
    notValidNameAlert.html(
      "<span class='alert alert-danger d-block my-2'>Nama tidak boleh kurang dari 6 karakter</span>"
    );
  } else {
    notValidNameAlert.html("")
  }
};

export const handlerInputHarga = () => {
  const price = inputItemPrice.val();
  if (!isNumber(price)) {
    notValidPriceAlert.html(
      "<span class='alert alert-danger d-block my-2'>Silahkan masukkan angka bukan huruf !!!</span>"
    );
  } else {
    notValidPriceAlert.html("");
  }
};

export const handleAddItem = () => {
  const name = inputItemName.val();
  const price = inputItemPrice.val();
  if (isNameAtLeastSix(name) && isNumber(price)) {
    addItemData(name, price);
    renderItems();
  }

};



export const handleModalShow = function (event) {
  clearInput();
  const formBtn = $(event.relatedTarget);
  const action = formBtn.attr("data-action");
  const name = formBtn.attr("data-name");
  const price = formBtn.attr("data-price");
  const index = formBtn.attr("data-index");
  const modalTitle = $(this).find(".modal-title");
  const submitBtn = $(this).find(".submit-btn");
  submitBtn.attr("data-action", action);

  switch (action) {
    case "add":
      modalTitle.text("Add Item");
      submitBtn.text("Add");
      break;
    case "edit":
      modalTitle.text(`Edit Item`);
      submitBtn.text("Edit");
      inputItemName.val(name);
      inputItemPrice.val(price);
      submitBtn.attr("data-index", index);
      break;

    default:
      break;
  }
};

export const handleEditItem = (index) => {
  const newName = inputItemName.val();
  const newPrice = inputItemPrice.val();
  editItemData(index, newName, newPrice);
  renderItems();
};

export const handleRemoveItem = function () {
  console.log('masuk function  hapus');
  const index = $(this).attr("data-index");
  removeItemData(index);
  renderItems();
};