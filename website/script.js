function shopNow() {
  alert("Redirecting to collections page...");
}
function shopNow() {
  window.location.href = "collections.html";
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}


const cartItems = document.getElementById("cartItems");

