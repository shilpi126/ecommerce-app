
import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter , Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import FetchMovieData from './components/Movies/FetchMovieData';

import Contact from './components/Contact/Contact';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
    setOpen(toggle)

  }

  return ( 
    <BrowserRouter>
    <CartProvider>
  
      {open && <Cart />}
      <Header onActive={handleCartToggle} />
      <Banner />
     <main>
   <Routes>
    <Route path='/' element={<ProductCard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      
    </Routes>
   </main>
      <Footer />
  
  </CartProvider>
  </BrowserRouter>

  );
}

export default App;
