document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product 1", price: 55.44 },
    { id: 2, name: "product 2", price: 63.454 },
    { id: 3, name: "product 3", price: 66.455 },
    { id: 4, name: "product 4", price: 27.564 },
  ];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  displayCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<span>${product.name} - ${product.price}</span>
        <button data-id=${product.id}>Add to Cart</button>
        `;
    productDiv.classList.add("product");
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const currProduct = products.find((p) => p.id === productID);
      cart.push(currProduct);
      saveCart();
      displayCart();
    }
  });

  function displayCart() {
    if (cart.length) {
      cartItems.innerText = "";
      emptyCart.classList.add("hidden");

      cart.forEach((cartItem) => {
        const cartDiv = document.createElement("div");
        cartDiv.innerHTML = `<span>${cartItem.name} - ${cartItem.price}</span><button data-id ="${cartItem.id}">remove</button>`;
        cartDiv.addEventListener("click", (e) => {
          if (e.target.tagName == "BUTTON") {
            cart = cart.filter((cartitem) => cartitem.id !== cartItem.id);
            displayCart();
            updateTotal();
            saveCart();
          }
        });
        cartItems.appendChild(cartDiv);
        updateTotal();
      });
    } else {
      cartItems.innerText = "";
      emptyCart.classList.remove("hidden");
    }
  }

  function updateTotal() {
    let totalCost = 0;
    cartTotal.classList.remove("hidden");
    cart.forEach((cartItem) => {
      totalCost += cartItem.price;
      totalPrice.textContent = `${totalCost}`;
    });
    if (totalCost == 0) cartTotal.classList.add("hidden");
  }

  checkOutBtn.addEventListener("click", () => {
    alert("proceed to checkout");
    cart = [];

    cartTotal.classList.add("hidden");
    displayCart();
    saveCart();
  });

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
