
import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  const [open, setOpen] = useState()

  const handleCartToggle = (toggle) => {
       setOpen(toggle)

  }

  const router = createBrowserRouter([
    {path:'/' , element: <Home/>},
    {path:'/product', element: <ProductCard/>},
    {path:'/about', element: <About/>}

  ])

  return ( 
    <CartProvider>
      {open && <Cart/>}
      <Header onActive={handleCartToggle}/>
      <Banner/>
      <RouterProvider router={router}/>
      {/* <ProductCard/> */}
      {/* <About/> */}
      <Footer/>
    </CartProvider>
  );
}

export default App;
