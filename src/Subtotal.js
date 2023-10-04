import { useContext } from 'react'
import { DataContext } from './App.js'

function Subtotal(){

    const {basketCount, basketPrice} = useContext(DataContext)

    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style:'currency',
        currency:'USD'
      })

    return <div className='subtotal'>
        <p>Subtotal ({basketCount} {basketCount <= 1 ? 'item' : 'items'}): <strong>{currencyFormatter.format(basketPrice)}</strong></p>


    </div>
}

export default Subtotal