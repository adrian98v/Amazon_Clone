const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')


app = express()

const stripe = new Stripe('sk_test_51MtHEKIyp0hRR6qrcyGtrci4YfX8L5mbibLGrpTXk9jGupCla0K0lAG6mQCUdUTmAKQ1Lc8yOsDkzrlK8r1lcY7Z00mOwkpOsb')

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