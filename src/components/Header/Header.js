import React, { useContext, useState } from 'react'
import { Button, Card, Container, Nav, Navbar, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'

const Header = (props) => {
  const [active, setActive] = useState(false)
  const ctx = useContext(CartContext);

  const handleClick = () => {
  setActive(!active)
  props.onActive(active)
      
  }

  

  
  
  return (
  <React.Fragment>
      <Navbar expand="lg" bg="dark" variant="dark" className="p-2">
    <div className="w-100 d-flex justify-content-center">
      <Stack direction="horizontal" gap={5}>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#store">STORE</Navbar.Brand>
        <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
      </Stack>
    </div>
    <div className="vr ms-auto" />

    <Button className="bg-dark " onClick={handleClick}>Cart</Button>
    <div style={{color:"white", marginBottom:"50px", fontSize:"20px", color:"yellow"}}>{ctx.cartItems.length}</div>
  </Navbar>

  </React.Fragment>
    
  )
}

export default Header