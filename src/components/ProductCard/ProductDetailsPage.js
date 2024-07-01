import React, { useEffect } from 'react'
import productsArr from './ProductData'
import { useParams } from 'react-router-dom'
import classes from "./ProductDetailsPage.module.css"

const ProductDetailsPage = () => {
    const {productId} = useParams()
    //console.log(productId)

  const singleProductData = productsArr.find((item) => item.id == productId)
  console.log(singleProductData)
  

return (
    <div className={classes.container}>
         <div  className={classes['img-arr1']}>
         {singleProductData.imageArr.map((img, index)=>(
        
                <img src={img} key={index+1}/>
        
         ))}
        </div>
        <div className={classes.img}>
        <img src={singleProductData.imageUrl}/>
        </div>
        <div  className={classes.details}>
        <h1>{singleProductData.title}</h1>
        <h2> ${singleProductData.price}</h2>
        <p>{singleProductData.rating} </p>
        <div  className={classes['img-arr']}>
         {singleProductData.imageArr.map((img, index)=>(
            //<div key={index+1} className={classes.image}>
                <img src={img} key={index+1}/>
        
         ))}
        </div>
        </div>

    </div>
)
}

export default ProductDetailsPage