// Obtener elementos del icono de carrito de compras y del panel de productos agregados
const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.querySelector(".cart-panel");

// Agregar evento de clic al icono de carrito de compras
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  const button = event.target;
  const product = button.parentElement.parentElement;
  const productId = product.querySelector('.product-id').innerText;
  const productTitle = product.querySelector('.product-title').innerText;
  const productPrice = product.querySelector('.product-price').innerText;

  addToCart(productId, productTitle, productPrice);
  console.log(`Agregando ${productTitle} al carrito con precio ${productPrice}`);
  updateCartTotal(); // Actualizar el total del carrito después de agregar un elemento
}

function addToCart(productId, productTitle, productPrice) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', productId);

  const cartItems = document.querySelector('.cart-items');
  const cartItemNames = cartItems.querySelectorAll('.cart-item .item-name');

  cartItemNames.forEach(item => {
    if (item.innerText === productTitle) {
      alert('Este producto ya ha sido agregado al carrito');
      return;
    }
  });

  const cartItemContent = `
    <span class="item-name">${productTitle}</span>
    <span class="item-price">${productPrice}</span>
    <button class="remove-item-btn">Eliminar</button>
  `;
  cartItem.innerHTML = cartItemContent;
  cartItems.appendChild(cartItem);
}

function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach(cartItem => {
    const priceElement = cartItem.querySelector('.item-price');
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    total += price;
  });
  const totalElement = document.querySelector('.cart-total-price');
  totalElement.innerText = '$' + total.toFixed(2);
}

