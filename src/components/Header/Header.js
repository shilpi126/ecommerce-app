import React, { useContext, useState } from 'react'
import { Button,Container,Nav,Navbar, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'
import { NavLink } from 'react-router-dom'
import classes from "./Header.module.css"
import AuthContext from '../../store/auth-context'


const Header = (props) => {
  const [active, setActive] = useState(false)
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext)

  const handleClick = () => {
  setActive(!active)
  props.onActive(active)
      
  }

  const handleLogout = () => {
    authCtx.logout()
  }

  
  return (
  
   <div className={classes.container}>
    <div className={classes.logo}>ECOMM</div>
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
         {!authCtx.isLoggedIn && 
          <NavLink  to="/auth">
          LOGIN
        </NavLink>}
        {authCtx.isLoggedIn && 
        <button onClick={handleLogout} className={classes.logoutbtn}>
          <NavLink  to="/logout">
          LOGOUT
        </NavLink>
        </button>}

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