import Subtotal from './Subtotal.js'
import { DataContext } from './App.js'
import BasketProduct from './Basket_Product.js'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { BiLogIn } from "react-icons/bi";
import './checkout.css'

function Checkout(){

    const history = useNavigate()

    const {basketProducts} = useContext(DataContext)
    const {user} = useContext(DataContext)
    const [boolUser, setBoolUser] = useState(false)

   
    return(<div className='checkout'>
        
        <div className='checkout_left'>

            <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className='checkout_ad' alt='amazon_ad'/>

            <div className='checkout_title'>Your shopping basket</div>

            {/* Showing basket products */}

            {basketProducts.map((item, i) => (
                
                <BasketProduct 
                    key= {i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}></BasketProduct>
                
            ))}

        </div>


        <div className='checkout_right'>      
            <Subtotal/>
            <button onClick={()=> user ? history('/payment') : setBoolUser(true)} 
            className='checkout_button'>Check out</button>
            
            <div className='signin_container'>
                <span>{boolUser && "Please sign in"}</span>
                <BiLogIn opacity={boolUser ? 1 : 0} size={20}></BiLogIn>
            </div>
            
        </div>

        
    </div>)
}

export default Checkout