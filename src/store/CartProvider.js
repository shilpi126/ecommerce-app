import React, {  useContext, useEffect, useState } from 'react'
import CartContext from './cart-context'

import productsArr from '../components/ProductCard/ProductData'
import axios from 'axios';
import AuthContext from './auth-context';
const API_KEY = 'https://crudcrud.com/api/31bcd6a3fc1e4ab7b495b5dc0cffd661';

const CartProvider = (props) => {
    const [cartData, setCartData] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    const authCtx = useContext(AuthContext);

    

    const email = authCtx.user.email;
    let useremailId = '';

    for(let i in email){
      if(email[i] !== '@' && email[i] !== '.'){
        useremailId+=email[i]
      }
    }

    

    const addToCart = async (id) => {
      const existingItem = cartData.find(item => item.id == id);

      if(existingItem){
        alert("Product Already Exist");
      }else{
            
      
      const findItem = productsArr.find(item => item.id == id);
         
     
      try{
        
        const response = await axios.post(`${API_KEY}/cart${useremailId}`, findItem);
        
        const data = response.data; 
        setCartData([...cartData, data]);
        
        }
      catch(err){
        console.log(err.message)
      }
      }

      
    }

    const getCartData = async () => {
      try{
        const response = await axios.get(`${API_KEY}/cart${useremailId}`);
        
        const data = response.data; 
        //console.log(data);
        setCartData(data)
      }catch(err){
        console.log(err.message)
      }
    }



    useEffect(()=>{
      getCartData()
    },[])


  


      // const existingItemIndex = cartData.findIndex((cartProduct) => cartProduct.id == id);

      // if(existingItemIndex !== -1){
      //   const updateCartItem = cartData.map((cart, index) => index === existingItemIndex ? {...cart, quantity: +cart.quantity + 1} : cart)
      //   setCartData(updateCartItem)
      // }else{
      //   setCartData([...cartData,{...findItem, quantity:1}])
      // }
  
      //}

    
  
    const cartContextData = {
        cartItems:cartData,
        addToCart,
        getCartData:getCartData,
        CartQuantity:cartQuantity,
    }

  return (
    <CartContext.Provider value={cartContextData}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider