import React, { useContext } from 'react';
import '../styles/components/checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumaTotal } from '../utils/utils';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos:</h3>
        ) : (
          <h3>No hay pedidos en el carrito</h3>
        )}
        {cart.map((item) => (
          <div className="checkout-item" key={item.id}>
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                handleRemoveItem(item);
              }}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>{`Precio total: $${handleSumaTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
