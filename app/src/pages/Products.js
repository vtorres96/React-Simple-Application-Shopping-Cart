import React from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
// import { addProductToCart } from '../store/actions';
import './Products.css';

const ProductsPage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="container">
            <div className="grid-products">
              {context.products.map(product => (
                <div className="product" key={product.id}>
                  <div className="product-title">
                    <strong>{product.title}</strong>
                  </div>
                  <div>
                    R${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;