import React, { useContext, useState } from 'react'
import cartElements from './CartProduct'
import { Button, Card, CardImg, CloseButton, Container, Form, InputGroup, Modal, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'

const Cart = () => {
  const ctx = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  
  const handleChange = (event) => {
      setQuantity(event.target.value)
  }
  
 
  console.log(ctx.cartItems)

  return (

<div   style={{
        backgroundColor: 'white',
        width: '35%',
        height: "auto",
        padding:"20px",
        border:"1px solid black",
        position:'absolute',
        left: '65%',
        
        zIndex:10,
      
        
        
      }}>
        <CloseButton />
<div className='text-center fw-bold '>Cart</div>
<Stack direction="horizontal" className="my-3 ">
  <div className="mx-auto fw-bold ">ITEM</div>
  <div className="mx-auto fw-bold ">PRICE</div>
  <div className="mx-auto fw-bold">QUANTITY</div>
</Stack>

{ctx.cartItems.map((item, index) => (
  <Stack key={index} direction="horizontal" className="my-2 ">
   <Stack direction='horizontal' gap={2}>
   <img src={item.imageUrl} alt="product" height="50px" width="80px" className="me-auto" />
   <div className="me-auto">{item.title}</div>
   </Stack>
    <div className="me-auto">{item.price}</div>
    <InputGroup className="mb-3"   style={{width:"50px"}}>
      
        <Form.Control
        value={quantity}
        onChange={handleChange}
        />
            
      </InputGroup>
      <Button className='bg-danger ' variant='dark'>Remove</Button>
    
  </Stack>
))}

<Stack >
<div className="fw-bold my-3 text-end ">Total</div>

<Button width="30px">PURCHASE</Button>
</Stack>
</div>
    
  )
}

export default Cart