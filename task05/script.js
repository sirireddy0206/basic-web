const products = [
    { id: 1, name: "T-shirt", price: 20, image: "https://5.imimg.com/data5/SELLER/Default/2024/2/393694851/GT/DZ/KA/193784714/cricket-jersey-t-shirt-1000x1000.jpg" },
    { id: 2, name: "Shoes", price: 50, image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/Shoes_6616dbb95f.jpg" },
    { id: 3, name: "Watch", price: 80, image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }
  ];
  
  // Cart is saved in localStorage to persist between pages
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
      el.textContent = cart.length;
    });
  }
  
  function displayProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    productList.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if(product) {
      cart.push(product);
      saveCart();
      updateCartCount();
      alert(`${product.name} added to cart.`);
    }
  }
  
  function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    if (!cartItems) return;
  
    cartItems.innerHTML = '';
    if(cart.length === 0) {
      cartItems.innerHTML = '<li>Your cart is empty.</li>';
      totalEl.textContent = '';
      return;
    }
  
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    totalEl.textContent = `Total: $${total}`;
  }
  
  function clearCart() {
    if(confirm("Are you sure you want to clear the cart?")) {
      cart = [];
      saveCart();
      displayCart();
      updateCartCount();
    }
  }
  