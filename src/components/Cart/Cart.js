import React, { useState } from 'react'
import cartElements from './CartProduct'
import { Button, Card, CardImg, Container, Modal, Stack } from 'react-bootstrap'

const Cart = () => {
  
   
  return (

<div   style={{
        backgroundColor: 'white',
        width: '35%',
        height: '80%',
        padding:"20px",
        border:"1px solid black",
        position:'absolute',
        left: '65%',
        
        zIndex:10,
      
        
        
      }}>
<div className='text-center fw-bold '>Cart</div>
<Stack direction="horizontal" className="my-3 ">
  <div className="mx-auto fw-bold ">ITEM</div>
  <div className="mx-auto fw-bold ">PRICE</div>
  <div className="mx-auto fw-bold">QUANTITY</div>
</Stack>

{cartElements.map((item, index) => (
  <Stack key={index} direction="horizontal" className="my-2 ">
    <img src={item.imageUrl} alt="product" height="50px" width="80px" className="me-auto" />
    <div className="me-auto">{item.price}</div>
    <div className="me-auto">{item.quantity}</div>
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