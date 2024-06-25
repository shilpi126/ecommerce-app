

import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
       setOpen(toggle)

       
  }

  return (
    <CartProvider>
      <Header onActive={handleCartToggle}/>
  
      {open && <Cart/>}
      <ProductCard/>
    </CartProvider>
  );
}

export default App;
