import { createContext } from "react";

const CartContext = createContext({
    cartItems:[],
    addToCart:(item) => {},
    CartQuantity:0,
})


export default CartContext;