import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', title: 'Call Of Dutty', price: 29.99 },
    { id: 'p2', title: 'God Of War IV', price: 49.99 },
    { id: 'p3', title: 'Bloodborne', price: 39.99 },
    { id: 'p4', title: 'UFC II', price: 29.99 },
    { id: 'p5', title: 'Fifa 20', price: 29.99 },
    { id: 'p6', title: 'The Last Of Us II', price: 39.99 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});