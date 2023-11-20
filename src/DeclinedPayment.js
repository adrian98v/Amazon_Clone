import DeclinedImage from './assets/Declined_symbol.jpg'
import './declinedPayment.css'
import { useNavigate } from 'react-router-dom'

function Declined(){

    const history = useNavigate()


    return <div className="declined_payment_container">    

        <img className='declined_payment_image' src={DeclinedImage}></img>

        <p className='declined_payment_p'>Oops, something went wrong</p>

        <p className='declined_payment_p'>Your card was declined, please go back and try again</p>

        <button className='go_back_button' onClick={()=>{history('/payment')}}>Go back</button>

    </div>
}

export default Declined