import Order from './User_order.js'
import './orders.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from './firebase'
import { useContext, useState, useEffect } from "react"
import { DataContext } from './App.js'
import { FaUserCircle } from "react-icons/fa"
import { MdRemoveShoppingCart } from "react-icons/md";
import Footer from './Footer.js'

function Orders(){

    const {user, userName} = useContext(DataContext)
    const [orders, setOrders] = useState([])
    const [minPriceFilter, setMinPriceFilter] = useState()
    const [maxPriceFilter, setMaxPriceFilter] = useState()
    const [date, setDate] = useState([])

    useEffect(()=>{

        // getting all the orders from Firestore
        
        async function getOrders(){

            const docRef = doc(db, `users/${user.email}`) 
            const mySnapshot = await getDoc(docRef)
            if(mySnapshot.exists()){
                const data = mySnapshot.data()

                if(mySnapshot.get('orders')){
                    setOrders(data.orders.sort((a,b)=>{
                        return b.createdAt.seconds - a.createdAt.seconds
                    }))
                }
                
            }
        }

        if(user){getOrders()}
        
    }, [])



    if(orders.length > 0){
        return <div className='orders'>
        
        <div className='orders_filters'>
            <div className='orders_filters_hello'><FaUserCircle style={{height: '30px', width: '30px', marginRight:'0.5em'}}/> Hello {userName}</div>

            <div className='orders_filters_container'>
                
                <div className='orders_filter_title'>Filters</div>


                <div className='orders_filter_date_container'>
                    <span>Date:</span>
                    <input type="date" className='orders_filters_input_date' onChange={(e)=>{
                        if(e.target.valueAsDate){
                            setDate([e.target.valueAsDate.getUTCDate(), e.target.valueAsDate.getUTCMonth()+1, e.target.valueAsDate.getUTCFullYear()])
                            
                        }else{setDate([]); console.log(date)}
                        
                        }}></input>
                </div>

                <div className='orders_filter_price_container'>
                    <span>Price:</span>
                    <input className='orders_filters_input_price' placeholder='min' onChange={(e)=>{
                        setMinPriceFilter(parseInt(e.target.value))

                    }}></input>
                    <span>-</span>
                    <input className='orders_filters_input_price' placeholder='max' onChange={(e)=>{
                        setMaxPriceFilter(parseInt(e.target.value))
                    }}></input>
                </div>
                
                
            </div>
        </div>


        <div className='title_container'>
            <h4>Your orders</h4>
        </div>

        <div className='orders_first_container'>
            
            <div className='orders_container'>
                {orders.map((item, i)=>(
                    <Order
                    key= {i}
                    filterDate={date}
                    minFilterPrice={minPriceFilter}
                    maxFilterPrice={maxPriceFilter}
                    createdAt={item.createdAt}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}></Order>
                ))}
            </div>
            
        </div>

        <Footer></Footer>

        </div>

    }else{
        return <div className='no_orders'>

            <p className='no_orders_p'>You don't have orders yet</p>

            <div className='empty_basket_container'>
                <MdRemoveShoppingCart className='empty_basket_icon'></MdRemoveShoppingCart>
            </div>
            

        </div>

    }
    
}

export default Orders