import React, { useContext, useState } from 'react'
import { Button,Container,Nav,Navbar, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'

const Header = (props) => {
  const [active, setActive] = useState(false)
  const ctx = useContext(CartContext);

  const handleClick = () => {
  setActive(!active)
  props.onActive(active)
      
  }

  

  
  
  return (
  
      <Navbar expand="lg" bg="dark" variant="dark" >
      <Container className="d-flex">
       <Nav>
       <Nav.Link href="/">
          HOME
        </Nav.Link>
        <Nav.Link  href="product">
          STORE
        </Nav.Link>
        <Nav.Link  href="about">
          ABOUT
        </Nav.Link>
       </Nav>
    
   

<div>   
<div style={{color:"white",marginLeft:"55px" ,marginBottom:"-5px", fontSize:"20px", color:"yellow"}}>{ctx.cartItems.length}</div>
   <Button className="bg-dark " onClick={handleClick}>Cart</Button>

</div>
</Container>
  </Navbar>

  
    
  )
}

export default Header