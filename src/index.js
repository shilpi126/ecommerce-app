import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { AuthContextProvide } from './store/auth-context';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthContextProvide>
        <CartProvider>
    
    <App />
    </CartProvider>
    </AuthContextProvide>
    </BrowserRouter>


);


