const localStoredItem = (id) => {
  let shopIng = {};
  let getItem = localStorage.getItem("shoping");
  if (getItem) {
    shopIng = JSON.parse(getItem);
  }
  let quantity = shopIng[id];
  if (!quantity) {
    shopIng[id] = 1;
  } else {
    let newQuantity = quantity + 1;
    shopIng[id] = newQuantity;
  }

  localStorage.setItem("shoping", JSON.stringify(shopIng));
};
const getCart = () => {
  let shopIng = {};
  let getItem = localStorage.getItem("shoping");
  if (getItem) {
    shopIng = JSON.parse(getItem);
  }
  return shopIng;
};
export { localStoredItem, getCart };
