import React, { useContext, useState } from 'react'
import { Button,Container,Nav,Navbar, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'
import { NavLink } from 'react-router-dom'
import classes from "./Header.module.css"


const Header = (props) => {
  const [active, setActive] = useState(false)
  const ctx = useContext(CartContext);

  const handleClick = () => {
  setActive(!active)
  props.onActive(active)
      
  }

  
  return (
  
   <div className={classes.container}>
    <div></div>
       <header className={classes.header}>
        <ul>
          <li>
          <NavLink className={classes.active}  to="/">
          HOME
        </NavLink >
          </li>
          <li>
          <NavLink  to="/product">
          STORE
        </NavLink>
          </li>
          <li>
         
        <NavLink  to="/about">
          ABOUT
        </NavLink>
          </li>
          <li>
             
        <NavLink  to="/contact">
          CONTACT US
        </NavLink>
          </li>
        </ul>
     
     
       </header>
    
   

<div>   

  <button className={classes.btn}  onClick={handleClick}>Cart</button>
  <div className={classes.badge}>{ctx.cartItems.length}</div>
</div>

</div>
  
    
  )
}

export default Header