export let items = [];

export const addItemData = (name, price) => {
  items.push({ name, price });
};

export const removeItemData = (dataIndex) => {
  items.splice(dataIndex, 1);
};

export const editItemData = (dataIndex, newName, newPrice) => {
  items = $.map(items, ({ name, price }, index) => {
    if (dataIndex == index) {
      return { name : newName, price : newPrice };
    }
    return { name, price };
  });    
  };
