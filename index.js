/* 
product add local storage and purchase kora
*/

// local storage from display show product

function localStorageToDisplay() {
  const cart = getCart();

  for (const name in cart) {
    // console.log(name, cart[name]);
    // local storage from live product show
    displayProduct(name, cart[name]);
  }
}

function addToCart() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  //   console.log(name, price)
  // error debug
  if (!name && !price) {
    return;
  }
  if (isNaN(price)) {
    return;
  }
  // display product
  displayProduct(name, price);
  // add to local storage
  addToLocalStorage(name, price);
  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
}
// display show kora
function displayProduct(name, price) {
  const product = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = `product name: ${name} and product price ${price}`;
  product.appendChild(li);
}
// cart avaiable ace ki na
function getCart() {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
}

// local storage add product
function addToLocalStorage(name, price) {
  const cart = getCart();
  //   console.log(cart);
  if (cart[name]) {
    cart[name] = parseInt(cart[name]) + parseInt(price);
  } else {
    cart[name] = price;
  }
  const stringified = JSON.stringify(cart);
  localStorage.setItem("cart", stringified);
}
localStorageToDisplay();

function purchaseProduct() {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
}
