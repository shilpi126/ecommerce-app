import React from 'react'
import productsArr from '../data'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const ProductCard = () => {
    console.log(productsArr)
  return (
    <Container>
        <Row >
          {productsArr.map((item,index)=>(
              <Col >
              <Card className='m-2 '>
                  <Card.Title className='text-center'>{item.title}</Card.Title>
                  <Card.Img src={item.imageUrl}/>
                 <Card.Body>
                 <Card.Text>${item.price}</Card.Text>
                 <Button>Add To Card</Button>
                 </Card.Body>
              </Card>
              </Col>
          ))}
        </Row>
    </Container>
  )
}

export default ProductCard