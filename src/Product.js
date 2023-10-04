import './product.css'
import { useContext, useEffect } from 'react'
import { DataContext } from './App.js'
import { Timestamp } from 'firebase/firestore'
import ProductPopUp from './ProductPopUp.js'


function Product({title, price, rating, image}){

    //  getting variables from DataContext

    const {basketCount, setBasketCount} = useContext(DataContext)

    const {basketPrice, setBasketPrice} = useContext(DataContext)

    const {basketProducts, setBasketProducts} = useContext(DataContext)

    const {basketProductsPopUp, setBasketProductsPopUp} = useContext(DataContext)

    const {newPopUp, setNewPopUp, popUpExit, setPopUpExit} = useContext(DataContext)

    
    //  rating stars

    const stars = new Array(rating)

    for(let i = 0; i < rating; i++) {
        if(rating < 10){
            stars.push(<p key={i}>⭐</p>)
        }
    }


    return <div className='product'>
        <div className='product_info'>

            <p className='product_description'>{title}</p>

            <div className='product_price'>
                <small>$</small><strong>{price}</strong>
            </div>

            <div className='product_rating'>
                {stars}
            </div>

        </div>


        <div className='image_container'>
            <img src={image}
            alt='product_image' className='image_product'/>
        </div>
            
        <button className='basket_button' onClick={()=>{
            setBasketCount(basketCount + 1)
            setBasketPrice(basketPrice + price)
            setBasketProducts([...basketProducts, 
                {id: basketProducts.length,
                title: title,
                price: price,
                rating: rating,
                image: image,
                createdAt: Timestamp.now()}
            ])

            setPopUpExit(false)
            setBasketProductsPopUp([{title: title, image: image}])
            
            setNewPopUp(!newPopUp)

            

        }}>Add to basket</button>


        {/* Products in the basket popup */}

            {basketProductsPopUp.length !== 0 && <ProductPopUp 
                title={basketProductsPopUp[0].title}
                image={basketProductsPopUp[0].image}>
            </ProductPopUp>}

       
    </div>
}


export default Product
