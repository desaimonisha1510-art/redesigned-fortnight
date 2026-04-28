const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "images/tshirt.jpg"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1999,
    image: "images/shoes.jpg"
  }
];

// Show products
const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <img src="${product.image}" width="150">
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
});

// Cart function
function addToCart(id) {
  alert("Added to cart!");
}