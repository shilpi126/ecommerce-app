
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
       setOpen(toggle)

       
  }

  return (
    <React.Fragment>
      <Header onActive={handleCartToggle}/>
  
      {open && <Cart/>}
      <ProductCard/>
    </React.Fragment>
  );
}

export default App;
