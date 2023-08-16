import React, { useContext, useRef } from 'react';
import '../styles/components/information.css';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumaTotal } from '../utils/utils';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    const requiredFields = [
      'name',
      'email',
      'address',
      'city',
      'country',
      'state',
      'cp',
      'phone',
    ];
    let isFormValid = true; // Variable para rastrear si el formulario es válido

    requiredFields.forEach((field) => {
      const inputElement = form.current[field];
      const value = formData.get(field);

      // Verificar campos en blanco
      if (!value) {
        isFormValid = false;
        inputElement.classList.add('invalid-input'); // Agregar clase de campo inválido
      } else {
        inputElement.classList.remove('invalid-input'); // Eliminar clase de campo inválido si está presente
      }

      // Verificar correo electrónico válido
      if (field === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isFormValid = false;
          inputElement.classList.add('invalid-input'); // Agregar clase de campo inválido
          alert(
            'Por favor, ingresa una dirección de correo electrónico válida.'
          );
        } else {
          inputElement.classList.remove('invalid-input'); // Eliminar clase de campo inválido si está presente
        }
      }
    });

    if (isFormValid) {
      addToBuyer(buyer);
      navigate('/checkout/payment');
    }
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="informacion-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="number" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="information-button">
          <div className="information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="information-item">
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="information-item">
          <div className="information-element">
            <h4>Total:</h4>
            <span>${handleSumaTotal(cart)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
