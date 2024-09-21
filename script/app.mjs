import {
  handlerInputHarga,
  handlerInputNama,
  handleModalShow,
  handleSubmitBtn,
  handleRemoveItem,
} from "./handler.mjs";
import { toggleAlertIfEmpty } from "./render.mjs";

const inputItemName = $(".input-item-name");
const inputItemPrice = $(".input-item-price");
const submitBtn = $(".submit-btn");
const modalForm = $("#modal-form");
// const removeBtn = $(".remove-btn");
const tBody = $(".table tbody");



$(function () {
  toggleAlertIfEmpty();
  inputItemName.on("input", handlerInputNama);
  inputItemPrice.on("input", handlerInputHarga);
  modalForm.on('show.bs.modal', handleModalShow);
  submitBtn.on('click', handleSubmitBtn);
  tBody.on('click','.remove-btn', handleRemoveItem);
});
