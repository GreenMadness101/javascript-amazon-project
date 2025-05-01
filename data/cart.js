//can be used outside of cart.js
export let cart = [{
  //Normalizing the data -> we are only using the productID and accessing the product from products.js (prevents duplication)
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  })

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  if(matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}

export function removeFromCart(productId) { 
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}