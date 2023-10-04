import './product_popup.css'
import { DataContext } from './App.js'
import { useContext, useState } from 'react'

function ProductPopUp({title, image}){

    const {newPopUp, popUpExit, setPopUpExit} = useContext(DataContext)
    

    return <div className={newPopUp ? 'product_popup' : 'product_popup_1'} id={popUpExit ? 'product_exit' : undefined}>

        <div className={newPopUp ? 'product_added' : 'product_added_1'} id={popUpExit ? 'product_added_exit' : undefined}>You added this product to the basket</div>

        <button className={newPopUp ? 'product_added_button' : 'product_added_button_1'} id={popUpExit ? 'product_exit_button' : undefined} onClick={()=>{
            setPopUpExit(true)
        }}>X</button>

        <img src={image} alt='product_popup_image' className='image_product_popup'/>
    
        <p className='product_popup_description'>{title}</p> 
    </div>
}

export default ProductPopUp