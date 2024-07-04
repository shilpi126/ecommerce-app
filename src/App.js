
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
import ProductDetailsPage from './components/ProductCard/ProductDetailsPage';
import Register from './components/Auth/Register';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
    setOpen(toggle)

  }

  return ( 
    <BrowserRouter>
    <CartProvider>
  
      {/* {open && <Cart />}
      <Header onActive={handleCartToggle} />
      <Banner />
     <main>
   <Routes>
   <Route path='/' element={<Home />} />
    <Route path='/product' element={<ProductCard />} />
    <Route path='/product/:productId/*' element={<ProductDetailsPage />} />
    
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
   
    </Routes>
   </main>
      <Footer /> */}
  
      <Register/>
  </CartProvider>
  </BrowserRouter>

  );
}

export default App;
