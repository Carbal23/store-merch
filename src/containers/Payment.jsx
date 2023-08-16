import React, { useContext } from 'react';
import '../styles/components/payment.css';
import AppContext from '../context/AppContext';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { handleSumaTotal } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const [{ isPending }] = usePayPalScriptReducer();

  const navigate = useNavigate();

  const handlePaymentSuccess = (data) => {
    const newOrder = {
      buyer,
      products: cart,
      payment: data,
    };

    addNewOrder(newOrder);
    navigate('/checkout/success');
  };
  
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="payment">
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          {isPending ? <p>loading...</p> : null}
          <PayPalButtons
            style={{ layout: 'horizontal' }}
            onClick={() => console.log('Inicio de pago')}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: handleSumaTotal(cart).toString(),
                      currency_code: 'USD',
                    },
                  },
                ],
              });
            }}
            onApprove={(data) => {
              handlePaymentSuccess(data), console.log('Compra exitosa', data);
            }}
            onCancel={() => console.log('Cancelando pago de compra')}
            onError={(err) => console.error('se presento un error', err)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
