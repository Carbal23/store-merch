import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  clientId:
    'AR0Otz8necPEzdE9O_t4kP-kUqUB9W0St5RQxDP0vhO1N0f8saHOGa-4aFUbqx2oFw6O3ybshD1V10TD',
  currency: 'USD',
  intent: 'capture',
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </StrictMode>
);
