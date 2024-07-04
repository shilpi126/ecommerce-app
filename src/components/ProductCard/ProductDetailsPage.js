import React, { useEffect } from 'react'
import productsArr from './ProductData'
import { useParams } from 'react-router-dom'
import classes from "./ProductDetailsPage.module.css"

import Contact from '../Contact/Contact'

const ProductDetailsPage = () => {
    const {productId} = useParams()
   

  const singleProductData = productsArr.find((item) => item.id == productId)
  const {imageUrl, imageArr, title,rating, price} = singleProductData;
  

return (
   <React.Fragment>
     <div className={classes.container}>
         <div  className={classes['img-arr1']}>
         {imageArr.map((img, index)=>(
        
                <img src={img} key={index+1}/>
        
         ))}
        </div>
        <div className={classes.img}>
        <img src={imageUrl}/>
        </div>
        <div  className={classes.details}>
        <h1>{title}</h1>
        <h2> ${price}</h2>
        <p>{rating} </p>



        <div  className={classes['img-arr']}>
        {imageArr.map((img, index)=>(
            
                <img src={img} key={index+1}/>
        
         ))}
        </div>
        </div>

    </div>
   </React.Fragment>
)
}

export default ProductDetailsPage