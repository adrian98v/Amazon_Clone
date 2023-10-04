import './successful.css'
import Check from './assets/Eo_circle_green_checkmark.svg.png'
import { DataContext } from './App.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Successful(){

    const {paymentDoneAmount} = useContext(DataContext)
    const history = useNavigate()

    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style:'currency',
        currency:'USD'
    })

    return <div className='successful_payment_container'>

        <img className='successful_green_check' alt='Green Check' src={Check}></img>

        <p className='successful_payment_p'>Payment Successful!</p>

        <p className='successful_payment_amount'>Amount Paid: <strong>{currencyFormatter.format(paymentDoneAmount)}</strong></p>

        <button className='successful_button' onClick={()=>{history('/')}}>Done</button>
    </div>
    
}

export default Successful