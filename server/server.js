const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')
const REACT_APP_STRIPE_KEY = require('./keys.js')

app = express()

const stripe = new Stripe(REACT_APP_STRIPE_KEY)

app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json())

app.post('/server', async (req, res)=>{
    const {id, amount} = req.body

    await stripe.paymentIntents.create({
        amount: amount,
        currency: 'USD',
        payment_method: id,
        confirm: true
    })

    res.end()

})

app.listen(3001)