import './checkoutProduct.css'
import { DataContext } from './App.js'
import { useContext } from 'react'


function CheckoutProduct({title, price, rating, image}){

    const stars = new Array(rating)

    for(let i = 0; i < rating; i++) {
        if(rating < 10){stars.push(<p key={i}>⭐</p>)}
    }



    return(
        <div className='basket_product'>
            <img className='basket_product_image' src={image} alt='basket product'></img>

            <div className='basket_product_info'>
                <p className='basket_product_title'>{title}</p>

                <div className='basket_product_price'>
                    <small>$</small><strong>{price}</strong>
                </div>

                <div className='basket_product_rating'>
                    {stars}
            </div>
        

                
            </div>
        </div>

    )
};

export default CheckoutProduct