import React, { useContext } from 'react'
import productsArr from './ProductData'
import CartContext from '../../store/cart-context'
import { Link } from 'react-router-dom'
import  classes from "./ProductCard.module.css"

const ProductCard = () => {
  const ctx = useContext(CartContext)
  
  const handleAddToCart = (event) => {
    ctx.addToCart(event.target.id)
    
  }
  
  return (
  
    
        <div className={classes.container}>
          {productsArr.map((item,index)=>(
              <div key={index+1} className={classes.card}>
          
                  <h1>{item.title}</h1>
                  <Link to={`/product/${item.id}`}>
                  <img src={item.imageUrl} alt='image loading...'/>
                  </Link>
                  <div className={classes.btn}>
                    <p>${item.price}</p>
                    <button id={item.id}  onClick={handleAddToCart}>Add To Card</button>
                  </div>
            
              </div>
          ))}
        </div>
    
  
  )
}

export default ProductCard