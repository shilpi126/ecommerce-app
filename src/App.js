
import React, { useContext, useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter , Route,Routes,BrowserRouter, Navigate} from 'react-router-dom';
import Home from './components/Home/Home';
import FetchMovieData from './components/Movies/FetchMovieData';

import Contact from './components/Contact/Contact';
import ProductDetailsPage from './components/ProductCard/ProductDetailsPage';
import Register from './components/Auth/Register';
import AuthContextProvide from './store/auth-context';
import Profile from './components/Auth/Profile/Profile';
import Navbar from './components/Auth/Navbar';
import AuthContext from './store/auth-context';
import HomePage from './components/Auth/Profile/HomePage';


function App() {
  const [open, setOpen] = useState()
  const authCtx = useContext(AuthContext)
  console.log(authCtx.isLoggedIn)

  const handleCartToggle = (toggle) => {
    setOpen(toggle)

  }


  return ( 
    <>
      {open && <Cart />}
      <Header onActive={handleCartToggle} />
      <Banner />
    <main>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={authCtx.isLoggedIn ? <ProductCard /> : <Navigate to='/auth'/>} />
        <Route path='/product/:productId/*' element={<ProductDetailsPage />} />
        
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {!authCtx.isLoggedIn &&  <Route path='/auth' element={ <Register/>}/>
      }

      
      <Route path='*' element={<Navigate to='/' />} />
      
        </Routes>
  </main>
      {/* <Footer />  */}
  
  </>

  );
}

export default App;
