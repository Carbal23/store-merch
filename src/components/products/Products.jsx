import React, { useContext } from 'react';
import Product from './product/Product';
import '../../styles/components/products.css';
import AppContext from '../../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="products">
      <div className="product-items">
        {products.map((product) => (
          <Product 
          key={product.id} 
          product={product}
          handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
