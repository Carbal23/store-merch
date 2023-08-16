import React from 'react';
import '../../../styles/components/product.css';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
