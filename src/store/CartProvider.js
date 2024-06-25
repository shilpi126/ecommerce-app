import React, { useState } from 'react'
import CartContext from './cart-context'
import productsArr from '../components/ProductCard/ProductData'

const CartProvider = (props) => {
    const [cartData, setCartData] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)


    const addToCart = (id) => {
      const findItem = productsArr.find(item => item.id == id);
    
      const existingItemIndex = cartData.findIndex((cartProduct) => cartProduct.id == id);

      if(existingItemIndex !== -1){
        const updateCartItem = cartData.map((cart, index) => index === existingItemIndex ? {...cart, quantity: +cart.quantity + 1} : cart)
        setCartData(updateCartItem)
      }else{
        setCartData([...cartData,{...findItem, quantity:1}])
      }
  
      }

    
  
    const cartContextData = {
        cartItems:cartData,
        addToCart,
        CartQuantity:cartQuantity,
    }

  return (
    <CartContext.Provider value={cartContextData}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider