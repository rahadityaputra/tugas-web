import { items } from "./data.mjs";

const tBody = $(".table tbody");
const inputItemName = $(".input-item-name");
const inputItemPrice = $(".input-item-price");
const emptyItemAlert = $(".empty-item-alert");

export const clearInput = () => {
  inputItemName.val("");
  inputItemPrice.val("");
};

export const toggleAlertIfEmpty = () => {
  if (items.length == 0) {
   emptyItemAlert.html(`
         <span class='alert alert-danger d-block my-2'>The item is empty !.</span>
      `);
    return true;
  } else {
   emptyItemAlert.html("");
    return false;
  }
};

export const renderItems = () => {
  toggleAlertIfEmpty()
  console.log('masuk function render');
  console.log(items);
  let html = $.map(items, ({ name, price }, index) => {
        return `
          <tr>
            <td scope="col">${index + 1}</td>
            <td scope="col">${name}</td>
            <td scope="col">${price}</td>
            <td scope="col">
              <button type="button" class="btn btnEdit btn-primary" data-action="edit" data-index="${index}" data-name="${name}" data-price="${price}" data-bs-toggle="modal" data-bs-target="#modal-form" ">
                <i class="bi bi-pencil-square"></i>
                Edit
              </button>
              <button type="button" class="btn remove-btn btn-danger" data-index="${index}">
                <i class="bi bi-x-square"></i>
                Remove
              </button>
            </td>
          </tr>
          `;
      })
      .join("");    
      tBody.html(html);  
};
