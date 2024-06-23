import React from 'react'
import productsArr from './ProductData'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'

const ProductCard = () => {
  
  return (
    <Container >
        <Row >
          {productsArr.map((item,index)=>(
              <Col xs={6} md={4}>
              <Card className='m-4 ' key={index+1}>
                  <Card.Title className='text-center m-2'>{item.title}</Card.Title>
                  <Card.Img src={item.imageUrl}/>
                    <Stack direction='horizontal' gap={5} className='m-2'>
                    
                    <Card.Text >${item.price}</Card.Text>
                    <Button className='ms-auto'>Add To Card</Button>
                    
                  
                  </Stack>
              </Card>
              </Col>
          ))}
        </Row>
    </Container>
  )
}

export default ProductCard