import { createContext } from "react";

const CartContext = createContext({
    cartItems:[],
    addToCart:(item) => {},
    CartQuantity:0,
    getCartData : () => {},
})


export default CartContext;