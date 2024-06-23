import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap'

const Header = (props) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
  setActive(!active)
  props.onActive(active)
      
  }
  console.log(active)
  return (
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
  </Navbar>
    
  )
}

export default Header