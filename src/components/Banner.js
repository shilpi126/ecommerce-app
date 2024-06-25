import React from 'react'
import { Card } from 'react-bootstrap'

const Banner = () => {
  return (
    <Card style={{backgroundColor:"gray", height:"10rem", width:"100%"}}>
    <Card.Title style={{textAlign:"center", fontSize:"90px", color:"whitesmoke", marginTop:"10px"}}>The Generics</Card.Title>
    </Card>
  )
}

export default Banner