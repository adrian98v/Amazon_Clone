import { useContext, useState } from "react"
import './payment.css'
import { DataContext } from './App.js'
import CheckoutProduct from "./CheckoutProduct.js"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router-dom"
import { db } from './firebase.js'
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";



function Payment(){

    const {basketPrice, setBasketCount, basketCount, basketProducts, setBasketProducts, setBasketPrice, setPaymentDoneAmount, user} = useContext(DataContext)

    const history = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const [userAddress, setUserAddress] = useState("")
    const [userCity, setUserCity] = useState("")
    const [userCountry, setUserCountry] = useState("")
    const [processing, setProcessing] = useState(true)
    
    
    async function getUserLocation(){

        const docRef = doc(db, `users/${user.email}`) 
        const mySnapShot = await getDoc(docRef);
        if(mySnapShot.exists()){
            setUserAddress(mySnapShot.get("address"))
            setUserCity(mySnapShot.get("city"))
            setUserCountry(mySnapShot.get("country"))
        }
    
    }
    

    async function setOrders(){

        basketProducts.forEach(elemento => {elemento.id = (Math.random()*1000).toFixed(4)})

        const docRef = doc(db, `users/${user.email}`)
        
        await updateDoc(docRef, {orders: arrayUnion(...basketProducts)})
    
    }


    if(user){getUserLocation()}

    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style:'currency',
        currency:'USD'
    })


    const handleSubmit = async (e) => {
        e.preventDefault()

        const {paymentMethod, error} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement),
        })

        if(!error) {

            setProcessing(false)
            const {id} = paymentMethod
            await fetch("http://localhost:3001/server", {
                method: "post",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    amount: basketPrice*100
                })
            })

            setOrders()
            elements.getElement(CardElement).clear()
            setProcessing(true)
            setBasketProducts([])
            setBasketCount(0)
            setPaymentDoneAmount(basketPrice)
            setBasketPrice(0)
            history('/successful')
            
        }

    }
   
    if(user){
        return <div className="payment">

        <div className="payment_checkout_items">
            <h2>Checkout ({basketCount} {basketCount === 1 ? 'item' : 'items'})</h2>
        </div>

        <div className="payment_section_one">

            <div className="payment_info_left">
                <h4>Delivery Address</h4>
            </div>

            <div className="payment_info_right">
                <h5>{userAddress}</h5>
                <h5>{userCity}, {userCountry}</h5>
            </div>
            
        </div> 

        <div className="payment_section_two">

            <div className="payment_info_left">
                <h3>Review items and delivery</h3>
            </div>

            <div className="payment_info_right">

                {basketProducts.map((item, i) => (
                
                    <CheckoutProduct 
                        key= {i}
                        title={item.title}
                         price={item.price}
                        rating={item.rating}
                        image={item.image}></CheckoutProduct>
                
                ))}
            </div>
            
        </div> 

        <div className="payment_section_three">

            <div className="payment_info_left">
                <h3>Payment Method</h3>
            </div>
                
            <div className="payment_info_right">
                <form className="payment_form" onClick={handleSubmit}>
                    <CardElement/>  

                    <div className="price_container">
                        <p>Total price: <strong>{currencyFormatter.format(basketPrice)}</strong></p>
                    </div>

                    <button className="payment_button" disabled={basketPrice === 0 || processing !== true}>
                        {processing ? 'Buy Now' : 'Processing'}
                    </button>
                </form>
                
            </div>
            
            
        </div> 
    </div>
    }
    else{
        return history('/')
    }
    
}


export default Payment