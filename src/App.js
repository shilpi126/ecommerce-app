
import React, { Suspense, useContext, useState } from 'react';
import { Route,Routes, Navigate} from 'react-router-dom';

import AuthContext from './store/auth-context';
const Home = React.lazy(()=> import('./components/Home/Home')) ;
const About = React.lazy(() => import('./components/About/About')) ;
const Banner = React.lazy(() => import( './components/Banner')) ;
const Footer = React.lazy(() => import('./components/Footer'))  ;
const Register = React.lazy(() => import('./components/Auth/Register'))
const ProductDetailsPage = React.lazy(() => import('./components/ProductCard/ProductDetailsPage'))
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Cart = React.lazy(()=>import('./components/Cart/Cart')) ;
const Header = React.lazy(() => import('./components/Header/Header'))
const ProductCard = React.lazy(() => import('./components/ProductCard/ProductCard'))

function App() {
  const [open, setOpen] = useState()
  const authCtx = useContext(AuthContext)
  

  const handleCartToggle = (toggle) => {
    setOpen(toggle)

  }


  return ( 
    <>
    <Suspense 
    fallback={
      <p>Loading...</p>
    }
    >
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
      <Footer /> 
      </Suspense>
  </>

  );
}

export default App;
