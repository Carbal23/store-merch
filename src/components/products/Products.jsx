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
      {products.length === 0 && <h1>No hay productos</h1> }
      <div className="product-items">
        {products.map((product) => (
          <Product 
          key={product.id} 
          product={product.attributes}
          handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
