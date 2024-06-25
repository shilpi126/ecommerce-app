

import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
       setOpen(toggle)

       
  }

  return (
    <CartProvider>
      {open && <Cart/>}
      <Header onActive={handleCartToggle}/>
      <Banner/>
      
      {/* <ProductCard/> */}
      <About/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
