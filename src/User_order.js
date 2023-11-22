import './orderr.css'
import moment from 'moment/moment'


function Order({minFilterPrice, maxFilterPrice, filterDate ,createdAt, title, price, rating, image}){
    
    const stars = new Array(rating)
    const time = moment(createdAt.seconds*1000)

    for(let i = 0; i < rating; i++) {
        if(rating < 10) stars.push(<p key={i}>⭐</p>)
    }

   

    //  filtering orders

    if(!isNaN(minFilterPrice) && !isNaN(maxFilterPrice) && filterDate.length > 0){ 

        // filtering products with highest, lowest price and a specific date

        if(price >= minFilterPrice && price <= maxFilterPrice && time.date() === filterDate[0] && (time.month()+1) === filterDate[1] && time.year() === filterDate[2]){

            return <div className='order'>
            <div className='current_date'>{time.format('LLLL')}</div>
    
            <div className='order_container'>
    
                <div className='order_image_container'>
                    <img className='order_image' src={image} alt='order_image'></img>
                </div>
                
                <div className='order_info_container'>
                    <p className='order_title'>{title}</p>
                    <div className='order_price'><small>$</small><strong>{price}</strong></div>
                    <div className='order_rating'>{stars}</div>
                </div>
    
            </div>
            
        </div>
        }

    }else{

        // filtering products with highest and lowest price

        if(!isNaN(minFilterPrice) && !isNaN(maxFilterPrice) && filterDate.length === 0){     
               
            if(price >= minFilterPrice && price <= maxFilterPrice){
    
                return <div className='order'>
                <div className='current_date'>{time.format('LLLL')}</div>
        
                <div className='order_container'>
        
                    <div className='order_image_container'>
                        <img className='order_image' src={image} alt='order_image'></img>
                    </div>
                    
                    <div className='order_info_container'>
                        <p className='order_title'>{title}</p>
                        <div className='order_price'><small>$</small><strong>{price}</strong></div>
                        <div className='order_rating'>{stars}</div>
                    </div>
        
                </div>
                
            </div>
            }
            
        }else{

            // filtering products with a specific date

            if(isNaN(minFilterPrice) && isNaN(maxFilterPrice) && filterDate.length > 0){
                if(time.date() === filterDate[0] && (time.month()+1) === filterDate[1] && time.year() === filterDate[2]){
                    return <div className='order'>
                    <div className='current_date'>{time.format('LLLL')}</div>
            
                    <div className='order_container'>
            
                        <div className='order_image_container'>
                            <img className='order_image' src={image} alt='order_image'></img>
                        </div>
                        
                        <div className='order_info_container'>
                            <p className='order_title'>{title}</p>
                            <div className='order_price'><small>$</small><strong>{price}</strong></div>
                            <div className='order_rating'>{stars}</div>
                        </div>
            
                    </div>
                    
                </div>
                }
                
            }else{

                // filtering products with only a lowest price and a specific date

                if(!isNaN(minFilterPrice) && filterDate.length > 0){

                    if(price >= minFilterPrice && time.date() === filterDate[0] && (time.month()+1) === filterDate[1] && time.year() === filterDate[2]){
                        
                        return <div className='order'>
                        <div className='current_date'>{time.format('LLLL')}</div>
                
                        <div className='order_container'>
                
                            <div className='order_image_container'>
                                <img className='order_image' src={image} alt='order_image'></img>
                            </div>
                            
                            <div className='order_info_container'>
                                <p className='order_title'>{title}</p>
                                <div className='order_price'><small>$</small><strong>{price}</strong></div>
                                <div className='order_rating'>{stars}</div>
                            </div>
                
                        </div>
                        
                    </div>
                    }
                        
                }else{

                    // filtering products with only a highest price and a specific date

                    if(!isNaN(maxFilterPrice) && filterDate.length > 0){

                        if(price <= maxFilterPrice && time.date() === filterDate[0] && (time.month()+1) === filterDate[1] && time.year() === filterDate[2]){
                            
                            return <div className='order'>
                            <div className='current_date'>{time.format('LLLL')}</div>
                    
                            <div className='order_container'>
                    
                                <div className='order_image_container'>
                                    <img className='order_image' src={image} alt='order_image'></img>
                                </div>
                                
                                <div className='order_info_container'>
                                    <p className='order_title'>{title}</p>
                                    <div className='order_price'><small>$</small><strong>{price}</strong></div>
                                    <div className='order_rating'>{stars}</div>
                                </div>
                    
                            </div>
                            
                        </div>
                        }
                    
                }else{
                    if(!isNaN(maxFilterPrice) && filterDate.length === 0 && price <= maxFilterPrice){
 
                        return <div className='order'>
                        <div className='current_date'>{time.format('LLLL')}</div>
                    
                            <div className='order_container'>
                    
                                <div className='order_image_container'>
                                    <img className='order_image' src={image} alt='order_image'></img>
                                </div>
                                
                                <div className='order_info_container'>
                                    <p className='order_title'>{title}</p>
                                    <div className='order_price'><small>$</small><strong>{price}</strong></div>
                                    <div className='order_rating'>{stars}</div>
                                </div>
                    
                            </div>
                            
                        </div>
                        
                    }else{
                        if(!isNaN(minFilterPrice) && filterDate.length === 0 && price >= minFilterPrice){
 
                            return <div className='order'>
                            <div className='current_date'>{time.format('LLLL')}</div>
                        
                                <div className='order_container'>
                        
                                    <div className='order_image_container'>
                                        <img className='order_image' src={image} alt='order_image'></img>
                                    </div>
                                    
                                    <div className='order_info_container'>
                                        <p className='order_title'>{title}</p>
                                        <div className='order_price'><small>$</small><strong>{price}</strong></div>
                                        <div className='order_rating'>{stars}</div>
                                    </div>
                        
                                </div>
                                
                            </div>
                        }
                    }
                }
            
                // filtering all products

                if(isNaN(minFilterPrice) && isNaN(maxFilterPrice) && filterDate.length === 0){
                    return <div className='order'>
                        <div className='current_date'>{time.format('LLLL')}</div>
                
                        <div className='order_container'>
                
                            <div className='order_image_container'>
                                <img className='order_image' src={image} alt='order_image'></img>
                            </div>
                            
                            <div className='order_info_container'>
                                <p className='order_title'>{title}</p>
                                <div className='order_price'><small>$</small><strong>{price}</strong></div>
                                <div className='order_rating'>{stars}</div>
                            </div>
                
                        </div>
                        
                    </div>
                    }
                }
            
            
            }

        }
        
    }
}

export default Order