import React, { useContext } from 'react'
import productsArr from './ProductData'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import CartContext from '../../store/cart-context'
import FetchMovieData from '../Movies/FetchMovieData'
import { Link, useParams } from 'react-router-dom'

const ProductCard = () => {
  const ctx = useContext(CartContext)
  

  const handleAddToCart = (event) => {
    ctx.addToCart(event.target.id)
    
  }
  
  return (
  <React.Fragment>
    <Container>
        <Row >
          {productsArr.map((item,index)=>(
              <Col xs={6} md={4} key={index+1}>
              <Card className='m-4 ' >
                  <Card.Title className='text-center m-2'>{item.title}</Card.Title>
                  <Link to={`/product/${item.id}`}>
                  <Card.Img src={item.imageUrl}/></Link>
                  <Stack direction='horizontal' gap={5} className='m-2'>
                    <Card.Text >${item.price}</Card.Text>
                    <Button id={item.id} className='ms-auto' onClick={handleAddToCart}>Add To Card</Button>
                  </Stack>
              </Card>
              </Col>
          ))}
        </Row>
    </Container>
  </React.Fragment>
  )
}

export default ProductCard